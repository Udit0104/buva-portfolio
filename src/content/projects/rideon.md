---
title: "RideOn — Uber-style Ride Hailing App"
description: "A full-stack ride-hailing platform with real-time driver tracking, dynamic fare calculation, two-sided onboarding for riders and drivers, and live trip status updates — built end-to-end by the BUVA team."
image: "../../assets/images/rideon.svg"
projectUrl: "https://github.com/buva-dev/rideon"
technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Docker", "Express", "Redis"]
icon: "code"
featured: true
publishedDate: 2024-06-15
order: 1
---

# RideOn — Ride Hailing Platform

A production-grade ride-hailing app in the mould of Uber, built entirely from scratch. RideOn connects riders and drivers through a real-time event-driven architecture.

## 🚀 Key Features

- **Real-time tracking** — Live driver location on a map using Socket.io and Google Maps API, updating every second.
- **Dynamic fare engine** — Distance + time + surge pricing computed server-side so neither client can tamper with fares.
- **Dual onboarding** — Separate flows for riders (quick sign-up) and drivers (document verification, background check queue).
- **Trip lifecycle** — Full state machine: request → accept → pickup → in-progress → complete, with push notifications at each transition.
- **Ratings & reviews** — Two-way rating system after every completed trip.
- **Wallet & payments** — In-app wallet with top-up and automatic fare deduction via payment gateway integration.

## 🛠️ Architecture

- **Backend:** Node.js + Express REST API with JWT auth and refresh tokens.
- **Realtime layer:** Socket.io rooms scoped per active trip for low-latency bidirectional updates.
- **Database:** MongoDB with geospatial indexes for nearest-driver queries (`$near`).
- **Mobile:** React Native (cross-platform iOS & Android), Expo-managed workflow.
- **Maps:** Google Maps SDK + Directions API for route rendering and ETA.
- **Infra:** Dockerised services, NGINX reverse proxy.

## 💡 Challenges & Solutions

The hardest problem was preventing race conditions when multiple drivers accept the same ride simultaneously. We solved this with MongoDB's atomic `findOneAndUpdate` with a conditional filter — only the first driver to write wins, and all others receive a real-time "ride taken" event.

Surge pricing required a background job that samples active request density per grid cell every 30 seconds and writes multipliers to a Redis cache, keeping fare lookups O(1).
