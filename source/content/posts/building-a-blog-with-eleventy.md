---
title: Building a Blog with Eleventy and Obsidian
date: 2025-06-08
description: How I set up a lightweight, Obsidian-friendly blog pipeline using Eleventy to generate static pages from Markdown.
tags:
  - web development
  - eleventy
  - obsidian
  - posts
draft: true
---

I wanted a blog that I could write in Obsidian — my preferred note-taking tool — and publish as static HTML to GitHub Pages. The requirements were straightforward:

- **Write in Obsidian** using standard Markdown and frontmatter
- **Build to static HTML** without a heavy framework
- **Deploy automatically** via GitHub Actions
- **Keep the existing portfolio site** untouched in `docs/`

## Why Eleventy

Eleventy (11ty) fits this use case well. It's a static site generator that works with plain Markdown files, supports Nunjucks templates, and outputs clean HTML with zero client-side JavaScript requirements. The build step is minimal — it reads from `content/`, applies templates, and writes to `docs/blog/`.

## The Pipeline

The content lives in an Obsidian vault at `content/blog/posts/`. Each post is a Markdown file with YAML frontmatter containing the title, date, description, tags, and draft status. The build process:

1. Eleventy reads all `.md` files in `content/blog/posts/`
2. Applies the `post.njk` layout (nav, footer, SEO metadata)
3. Outputs `docs/blog/<post-slug>/index.html`
4. GitHub Actions runs the build on every push to `main`

## Wikilinks

One of the goals was to support Obsidian-style `[[wikilinks]]`. These get converted to proper HTML links during the build, so `[[Another Post]]` becomes a working link to `/blog/another-post/`. This means I can write naturally in Obsidian and the links just work on the published site.

## What's Next

This is the first post — a way to validate the entire pipeline works end-to-end. Future additions might include tag index pages, search functionality, or backlinks. But for now, the goal is simple: write, build, publish.
