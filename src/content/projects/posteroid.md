---
title: "Posteroid — Design & SEO Platform"
description: "Posteroid is a full website built from scratch — design, development, and SEO all handled by BUVA. The platform lets users create, customise and download print-ready posters. Achieved strong organic rankings through on-page and technical SEO."
image: "../../assets/images/posteroid.svg"
projectUrl: "https://github.com/buva-dev/posteroid"
technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Fabric.js", "PostgreSQL", "SEO", "Vercel"]
icon: "code"
featured: true
publishedDate: 2023-11-10
order: 4
---

# Posteroid — Design & SEO Platform

Posteroid was a ground-up build: zero templates, zero third-party website builders. BUVA handled the complete product lifecycle — UX design, front-end, back-end, and a full technical SEO rollout.

## 🚀 Key Features

- **Canvas-based editor** — Fabric.js-powered drag-and-drop poster creator supporting text, shapes, images, gradients and custom fonts.
- **Template library** — 100+ professionally designed starting templates organised by category; users can fork and customise any of them.
- **Export engine** — High-resolution PNG and PDF exports (up to A2 print quality) generated server-side to avoid browser memory limits.
- **User accounts** — Save designs to cloud storage, version history, and shareable public links for every poster.
- **SEO-optimised pages** — Static-generated template gallery pages with structured data (JSON-LD), canonical tags, Open Graph, and a dynamically generated sitemap.

## 🛠️ Technical Highlights

- **Framework:** Next.js 14 App Router for hybrid static + server rendering — template pages are static, editor pages are client-side only.
- **Styling:** Tailwind CSS with a custom design system; dark mode support throughout.
- **Canvas:** Fabric.js handles all drawing primitives; custom serialiser converts canvas state to JSON for persistence.
- **Database:** PostgreSQL stores users, designs, and template metadata.
- **Export:** Server-side canvas rendering with `canvas` npm package and `pdf-lib` for PDF generation.
- **Deployment:** Vercel with Edge Functions for dynamic OG image generation.

## 🔍 SEO Work

- Achieved page-1 rankings for multiple long-tail poster design keywords within 3 months.
- Implemented full Core Web Vitals optimisation: LCP < 1.8 s, CLS < 0.05, INP < 100 ms.
- Structured data markup for `SoftwareApplication` and `ImageObject` schema types.
- Automated sitemap generation from the database so new templates are indexed within 24 hours.
- Internal linking strategy across 200+ template category pages to distribute page authority.
