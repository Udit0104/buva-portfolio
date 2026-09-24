---
title: "HapScale — Business Growth Platform"
description: "A full-featured business intelligence and growth platform built for an ex-Wipro director. HapScale combines a dynamic React front-end with a Node.js engine to deliver real-time analytics, lead management, and automated reporting at enterprise scale."
image: "../../assets/images/hapscale.svg"
projectUrl: "https://hapscale.com"
technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Chart.js", "REST API", "TypeScript"]
icon: "house"
featured: true
publishedDate: 2024-09-01
order: 2
---

# HapScale — Business Growth Platform

Commissioned directly by a former Wipro director, HapScale is an enterprise-grade web platform for tracking, visualising and accelerating business growth metrics across multiple verticals.

## 🚀 Key Features

- **Executive dashboard** — Configurable KPI cards and drill-down charts built with Chart.js, giving leadership a single pane of glass across all business units.
- **Lead pipeline** — CRM-style lead management with custom stages, assignments, follow-up reminders and conversion analytics.
- **Automated reports** — Scheduled PDF/Excel exports delivered via email; zero manual effort for weekly board packs.
- **Role-based access** — Granular permission system: executive view, manager view, and analyst view with column-level data masking.
- **Audit trail** — Every data mutation logged with user, timestamp and diff for compliance.
- **API-first design** — All features exposed via versioned REST endpoints so the client's own internal tools can integrate seamlessly.

## 🛠️ Technical Highlights

- **Frontend:** React + TypeScript with a component library tuned to the client's brand guidelines.
- **Backend:** Node.js (Express) with a service-layer architecture; PostgreSQL for relational data integrity.
- **Main engine:** A Node.js microservice that aggregates raw data from multiple third-party sources (CRM, ERP, ad platforms) on a cron schedule, normalises it, and pushes deltas to the dashboard via Server-Sent Events.
- **Containerisation:** Docker Compose for local dev parity; production deployed on a private VPS with automated NGINX SSL termination.

## 💡 Challenges & Solutions

Aggregating heterogeneous data from a legacy ERP (SOAP-based) and modern REST APIs into a single schema required a dedicated ETL adapter layer. Each source gets its own adapter class with a standardised `extract → transform → load` interface, making new integrations a one-file addition.

The client requested sub-second dashboard load times. We achieved this with PostgreSQL materialised views refreshed every 5 minutes, so expensive aggregation queries hit pre-computed results rather than raw tables.
