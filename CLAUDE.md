## General Intent & Strategy

Professional personal website and portfolio hub for Amir Babar, hosted on GitHub Pages at `https://amirbabar.github.io/`.
The site is designed to serve as a recruiter-friendly, narrative-driven home base — moving beyond a static resume to highlight technical skills, impact stories, and professional brand.

- **Target Audience:** Technical recruiters, hiring managers, and enterprise healthcare leadership.
- **Primary Goal:** Serve as a high-impact "executive summary" and professional hub that captures attention within a 6-to-8-second initial scan.
- **Core Narrative:** Position Amir as a high-level technical specialist who bridges deep scientific domain knowledge with advanced data engineering and analytics architecture. The messaging must emphasize the ability to translate fragmented data pipelines into actionable, executive-level decision support.
- **UX/Design Philosophy:** Clean, modern, and highly scannable. Avoid heavy, text-dense resume replication. Favor modular components, clear value propositions, architectural pillars, and direct pathways to an external resume link or future case studies.

## Project Overview

Professional portfolio hub and blog for Amir Babar, hosted on GitHub Pages at `https://amirbabar.github.io/`. The site consists of a static landing page (portfolio) and a Quartz-powered blog with wikilinks, search, graph view, and Obsidian vault integration.

**Stack:** Quartz v5 builds the blog from `source/content/`. The landing page (HTML/CSS/JS) lives in `source/content/` as static assets copied verbatim to the build output root. Blog served at `/posts/`.

**Site structure:** Landing page at `/` (single-page with anchor navigation). Blog at `/posts/` (Quartz SPA with sidebar, search, backlinks, TOC, graph view).

## Key Files

| File | Purpose |
|------|---------|
| `source/content/index.html` | Landing page markup (copied verbatim to build root) |
| `source/content/style.css` | Landing page styles (copied verbatim to build root) |
| `source/content/assets/headshot.jpg` | Profile photo (copied verbatim to build root) |
| `source/content/posts/*.md` | Blog posts (Markdown + YAML frontmatter) |
| `source/quartz.config.yaml` | Quartz site config (title, fonts, colors, plugins, layout) |
| `source/quartz/styles/custom.scss` | Theme overrides matching portfolio design |
| `source/public/` | Build output (generated, not committed) |
| `.github/workflows/deploy.yml` | CI/CD: Quartz build + deploy on push |
| `info/` | Source material (CV, LinkedIn data, photos, diplomas) — do not edit directly |

## Design System

- **Fonts:** DM Serif Display (headings, weight 400 only), DM Sans (body), SF Mono (code), loaded via Google Fonts CDN
- **Palette:** Navy `#0C2333`, white `#FAFAFA`, accent blue `#3B82F6`, accent hover `#2563EB`, amber `#F59E0B`
- **Landing page layout:** Max-width 1080px, clamp-based responsive padding, `reveal` class for scroll animations
- **Responsive:** Two breakpoints — 768px (tablet/mobile nav) and 480px (small mobile)
- **Blog:** Quartz default layout with sidebar explorer, search, TOC, backlinks, graph view

## Content Notes

- **Landing page About section:** First-person narrative. Emphasizes analytics consulting, stakeholder engagement, pipeline building, and HCI-informed CS background.
- **Experience:** Timeline format. Current role: Senior Consultant, Strategic Decision Support at Penn Medicine (July 2024–Present). Prior: BI Analyst at Penn Medicine LGH, Sr Strategic Sourcing Analyst at Tower Health.
- **Education:** 4 degrees in chronological order — BA Chemistry (Case Western), MS CS (Georgia Tech, HCI, completed 2025), MS Business Analytics (Cincinnati), MS Molecular Genetics (Cincinnati).
- **Skills:** Domains + Tools badges. Epic Cogito suite is a key differentiator.
- **Publications:** 3 PubMed papers from prior research career. PMIDs link to PubMed.

## What's Intentionally Absent

- **No resume/CV download link** — user has decided against this for now.
- **No projects section** — no portfolio-ready artifacts to showcase yet. Add when available.

## External Links (Hero + Footer)

- Email: `amir.k.babar@gmail.com`
- LinkedIn: `https://linkedin.com/in/amir-babar`
- GitHub: `https://github.com/AmirBabar`

## Constraints

- GitHub Pages deployment only. Static output, relative paths.
- No server-side features, no secrets.
- Content must remain factual — do not fabricate career details, dates, or outcomes.
- Ask before publishing sensitive data (GPA, transcripts, phone, exact address).

## Blog Architecture

**Stack:** Quartz v5 builds Markdown from `source/content/posts/` to static HTML in `source/public/`. Blog served at `/posts/`.
**Obsidian vault:** `source/content/` — open this folder in Obsidian for writing.

| Path | Purpose |
|------|---------|
| `source/content/posts/*.md` | Blog posts (Markdown + YAML frontmatter) |
| `source/content/index.html` | Landing page (static, copied to build root by Assets emitter) |
| `source/content/style.css` | Landing page styles (static, copied to build root) |
| `source/content/assets/` | Landing page images |
| `source/quartz.config.yaml` | Site configuration (plugins, theme, layout) |
| `source/quartz/styles/custom.scss` | Custom SCSS theme overrides |
| `source/public/` | Generated build output |

### Blog Frontmatter Schema
```yaml
---
title: "Post Title"
date: YYYY-MM-DD
description: "One-sentence summary for SEO."
tags: ["tag1", "tag2"]
draft: true
---
```
Set `draft: false` to publish. Quartz handles layout via config — no `layout` field needed.

### Build Commands
- `npm run build` — builds Quartz site to `source/public/`, renames `index` to `index.html`
- `npm run serve` — builds and starts dev server for live preview

### Landing Page Copy
The landing page files (`index.html`, `style.css`, `assets/headshot.jpg`) live in `source/content/` and are copied verbatim to the build root by Quartz's Assets emitter. The build script renames the slug-stripped `index` file back to `index.html` for GitHub Pages compatibility.

## Workflow

- **Landing page edits** go to `source/content/index.html` and `source/content/style.css`.
- **Blog posts** are written in `source/content/posts/` as Markdown, then `npm run build`.
- **Theme changes** go in `source/quartz.config.yaml` (colors, fonts) or `source/quartz/styles/custom.scss` (CSS overrides).
- Commit to `main`, push — GitHub Actions builds and deploys.
- Always verify internal consistency when updating content (e.g., if About mentions "standardization and consolidation," the Experience bullet must match).
- Test changes locally with `npm run serve`. The site is the deliverable.
