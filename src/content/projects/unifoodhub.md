---
title: "UniFood Hub — Food Delivery Platform"
description: "unifoodhub.in is a Zomato-style food ordering and delivery platform serving multiple restaurants. Features include live order tracking, restaurant dashboards, dynamic menus, and a full payment flow — running live in production."
image: "../../assets/images/unifoodhub.svg"
projectUrl: "https://unifoodhub.in"
technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io", "Tailwind CSS", "Cloudinary"]
icon: "house"
featured: true
publishedDate: 2024-03-20
order: 3
---

# UniFood Hub — Food Delivery Platform

A live, production food-delivery platform at [unifoodhub.in](https://unifoodhub.in), built to the same standard as Zomato or Swiggy. Restaurants self-manage menus; customers browse, order, pay and track their delivery in real time.

## 🚀 Key Features

- **Multi-restaurant marketplace** — Any restaurant can onboard, upload their menu with photos, set availability and manage orders from a dedicated dashboard.
- **Real-time order tracking** — Live status pipeline (placed → confirmed → preparing → out for delivery → delivered) with Socket.io events pushed to the customer's screen.
- **Smart search & filters** — Full-text search across restaurant names and dishes, with filters for cuisine, price range, dietary tags (veg/non-veg/vegan) and delivery time.
- **Cart & checkout** — Persistent cart across sessions, coupon/promo engine, address management, and Stripe-powered secure payments.
- **Ratings & photos** — Customers can rate dishes and upload photos; aggregated ratings displayed on restaurant cards.
- **Admin panel** — Platform-wide analytics: GMV, active users, best-selling dishes, delivery partner performance.

## 🛠️ Technical Highlights

- **Frontend:** React with Tailwind CSS; fully responsive from 320 px mobile to 1440 px desktop.
- **Backend:** Node.js + Express with a clean controller/service/repository pattern.
- **Database:** MongoDB with compound indexes on location + cuisine for fast geo-filtered queries.
- **Media:** Cloudinary for optimised image uploads and transformations (WebP, responsive sizes).
- **Payments:** Stripe Checkout with webhook-driven order confirmation — no frontend polling needed.
- **Realtime:** Socket.io namespaces per order so updates are scoped and never cross-contaminated.

## 💡 Challenges & Solutions

Handling concurrent orders during peak hours without double-booking a restaurant's capacity required an order slot system backed by MongoDB transactions — each order atomically increments the restaurant's active order counter and is rejected if the cap is exceeded.

SEO for a dynamic React app was solved with server-side rendering for restaurant and dish pages, ensuring Google indexes actual content rather than an empty shell.
