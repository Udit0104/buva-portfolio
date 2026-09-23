---
title: "Posteroid — Custom Poster E-Commerce"
description: "A full-stack e-commerce platform for selling custom posters and framed prints, with product collections, custom image uploads, order management, and a modern shopping experience."
image: "../../assets/images/posteroid.svg"
projectUrl: "https://github.com/buva-dev/posteroid"
technologies: ["Shopify", "Hydrogen", "React", "JavaScript", "Storefront API", "Admin API", "Vercel"]
icon: "code"
featured: true
publishedDate: 2023-11-10
order: 4
---

# Posteroid — Custom Poster E-Commerce

Posteroid is a full-stack e-commerce store for custom posters and framed prints. Built on Shopify's Hydrogen framework with React, it delivers a fast, modern shopping experience — from browsing curated collections to uploading a personal image for a print-on-demand order.

## 🚀 Key Features

- **Product collections** — Curated poster collections organised by theme, size, and finish, all sourced and managed through the Shopify Admin.
- **Custom image uploads** — Customers upload their own photos or artwork and choose frame size, material, and finish for a fully personalised print order.
- **Cart & checkout** — Hydrogen-powered headless cart with Shopify's native checkout, supporting discount codes, shipping estimation, and multiple payment methods.
- **Order management** — Full order lifecycle visible in the Shopify Admin: processing, fulfilment, shipping tracking, and delivery confirmation.
- **Storefront API integration** — All product data, collections, and inventory fetched via Shopify's Storefront API, keeping the frontend fully decoupled from the Shopify backend.
- **Admin API integration** — Custom order metadata (print specs, uploaded file URLs) written back to Shopify orders via the Admin API for fulfilment team visibility.

## 🛠️ Technical Highlights

- **Framework:** Shopify Hydrogen (React-based) for server-side rendering with streaming, giving fast Time-to-First-Byte on product pages without sacrificing interactivity.
- **APIs:** Storefront API for product/collection queries; Admin API for custom order metadata and fulfilment webhooks.
- **Custom uploads:** Files uploaded directly to cloud storage; the signed URL is attached to the Shopify order via metafields so the print team can access the source file at fulfilment time.
- **Deployment:** Vercel with edge-optimised caching for product pages and image assets; ISR ensures catalogue changes go live within seconds without a full rebuild.
- **Performance:** Route-level prefetching, optimised image pipeline via Shopify CDN, and deferred loading for below-the-fold collection grids.

## 💡 Challenges & Solutions

Shopify's native checkout is opinionated — customising it for print specs (size, frame, finish) without a custom checkout extension required encoding those options as line item properties and surfacing them cleanly in the cart UI. The Admin API then reads those properties to generate the fulfilment sheet for the print team.

Handling large image uploads (up to 50 MB for print-quality files) without blocking the checkout flow was solved with a background upload pattern: the file uploads asynchronously while the customer completes the rest of the order, and the checkout button is only enabled once the upload resolves.
