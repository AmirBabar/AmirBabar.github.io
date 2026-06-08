module.exports = function(eleventyConfig) {
  // Passthrough copy for blog assets (images etc.)
  eleventyConfig.addPassthroughCopy({ "blog": "blog" });

  // Custom markdown library for wikilink support
  const markdownIt = require("markdown-it");
  const md = markdownIt({ html: true });

  md.use(function wikilinkPlugin(md) {
    md.inline.ruler.after("escape", "wikilinks", (state, silent) => {
      if (state.src.charCodeAt(state.pos) !== 0x5B /* [ */) return false;
      if (state.src.charCodeAt(state.pos + 1) !== 0x5B /* [ */) return false;

      const max = state.posMax;
      let end = state.pos + 2;

      while (end < max && state.src.charCodeAt(end) !== 0x5D /* ] */) {
        end++;
      }
      if (end >= max || state.src.charCodeAt(end + 1) !== 0x5D /* ] */) return false;

      if (!silent) {
        const token = state.push("wikilink_open", "a", 1);
        token.attrSet("href", `/blog/${state.src.slice(state.pos + 2, end).toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")}/`);

        const text = state.push("text", "", 0);
        text.content = state.src.slice(state.pos + 2, end);

        state.push("wikilink_close", "a", -1);
      }

      state.pos = end + 2;
      return true;
    });
  });

  eleventyConfig.setLibrary("md", md);

  // Reading time filter (words per minute)
  eleventyConfig.addFilter("readingTime", (content) => {
    const wordsPerMinute = 200;
    const text = typeof content === "string" ? content : "";
    const words = text.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
    return `${minutes} min read`;
  });

  // Date formatting filter
  eleventyConfig.addFilter("dateDisplay", (date) => {
    if (!(date instanceof Date)) date = new Date(date);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // ISO date filter for datetime attributes
  eleventyConfig.addFilter("dateToISO", (date) => {
    if (!(date instanceof Date)) date = new Date(date);
    return date.toISOString();
  });

  // JSON serialization filter for script tags
  eleventyConfig.addFilter("json", (value) => {
    return JSON.stringify(value);
  });

  return {
    dir: {
      input: "content",
      includes: "_includes",
      output: "docs",
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
  };
};
