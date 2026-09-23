---
title: "QrResto — Digital Restaurant Ordering"
description: "A QR-based restaurant ordering system where customers scan a table QR code, browse the menu, and place orders directly from their phone. Restaurant staff manage incoming orders in real time through a dedicated dashboard, powered by Firebase and Firestore."
image: "../../assets/images/qrresto.svg"
projectUrl: "https://github.com/buva-dev/qrresto"
technologies: ["JavaScript", "HTML", "Firebase", "Firestore", "Firebase Authentication", "QR Code"]
icon: "house"
featured: true
publishedDate: 2024-06-15
order: 5
---

# QrResto — Digital Restaurant Ordering

QrResto eliminates paper menus and verbal ordering by giving every table its own QR code. Customers scan, browse, and order from their phone. Staff see orders appear instantly on a live dashboard — no third-party delivery platform, no hardware POS required.

## 🚀 Key Features

- **QR-based table identification** — Each table has a unique QR code that encodes the table ID. Scanning it opens the menu scoped to that table, so orders are never misrouted.
- **Digital menu browsing** — Full menu with categories, item descriptions, and prices rendered as a clean mobile-first web app — no app install needed.
- **Real-time order placement** — Customers submit orders directly from the browser; Firestore's real-time listeners push them to the staff dashboard in milliseconds.
- **Staff order dashboard** — Live view of all active orders grouped by table, with status controls: Pending → Cooking → Served.
- **Firebase Authentication** — Staff login is protected by Firebase Auth so only authorised personnel can access the management panel.
- **Order history** — All orders persisted in Firestore for end-of-day review, billing reconciliation, and menu popularity insights.

## 🛠️ Technical Highlights

- **Frontend:** Vanilla JavaScript and HTML — zero framework overhead, fast load on any mobile device including low-end phones on patchy restaurant Wi-Fi.
- **Database:** Cloud Firestore for real-time, document-based order storage. Firestore's `onSnapshot` listeners drive the live dashboard without any polling.
- **Auth:** Firebase Authentication (email/password) gates the staff dashboard; customer-facing menu is public by design.
- **QR generation:** QR codes are generated per table and encoded with the table ID as a URL parameter, making them printable and replaceable without any backend change.
- **Hosting:** Firebase Hosting for zero-config HTTPS deployment with global CDN.

## 💡 Challenges & Solutions

The core challenge was keeping the customer UI effortless while giving staff enough control. The solution was a strict separation: the customer app is a pure read-then-write flow (browse → add to cart → confirm), while the staff app is a real-time reactive dashboard that mirrors Firestore state directly.

Concurrent orders from multiple tables arriving simultaneously were handled by structuring Firestore documents as `orders/{tableId}/{orderId}` — each table's order stream is independent, so high traffic at one table never affects query performance for others.

For restaurants without reliable Wi-Fi coverage across all tables, the QR URL is kept intentionally minimal (just the table ID as a query param) so it resolves fast even on mobile data.
