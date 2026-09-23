---
title: "RidOn — Ride-Hailing Platform"
description: "A real-time ride-hailing Android application with separate Rider and Driver apps, featuring ride requests, driver matching, live location tracking, and real-time ride updates."
image: "../../assets/images/rideon.svg"
projectUrl: "https://github.com/buva-dev/rideon"
technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Google Maps API", "GeoFire"]
icon: "code"
featured: true
publishedDate: 2024-06-15
order: 1
---

# RidOn — Ride-Hailing Platform

RidOn is a real-time ride-hailing system built natively for Android, split into two separate apps — one for riders, one for drivers. Kotlin and Jetpack Compose power the UI, while Firebase and GeoFire handle the real-time backend so every state change propagates instantly across both apps.

## 🚀 Key Features

- **QR ride requests** — Riders enter a pickup and drop location, and the request is broadcast in real time to nearby available drivers.
- **Driver matching via GeoFire** — GeoFire geohash queries find drivers within a configurable radius; the nearest available driver is presented the request first.
- **Live location tracking** — Driver location updates stream to the rider's map view in real time via Firestore listeners — no polling, no lag.
- **Separate Rider & Driver apps** — Purpose-built UIs for each role: rider app focuses on booking and tracking, driver app on incoming requests, navigation, and trip controls.
- **Full trip lifecycle** — State machine covering request → accepted → en route to pickup → ride in progress → completed, with UI reflecting each transition instantly on both sides.
- **Real-time ride updates** — Every status change (driver accepted, arrived, trip started, trip ended) is pushed to both apps simultaneously via Firestore `onSnapshot`.

## 🛠️ Technical Highlights

- **Language & UI:** Kotlin with Jetpack Compose for a fully declarative, reactive Android UI — no XML layouts.
- **Real-time backend:** Firebase Firestore as the live data layer; both apps subscribe to the active ride document so updates are instant and offline-resilient.
- **Location & proximity:** GeoFire library encodes driver coordinates as geohashes in Firestore and queries by radius, making driver discovery efficient without custom geospatial indexing.
- **Maps:** Google Maps SDK for Android renders the live map, driver/rider pins, and the route polyline; Directions API provides turn-by-turn route data and ETA.
- **Auth:** Firebase Authentication manages separate rider and driver identities with role claims stored in Firestore user documents.

## 💡 Challenges & Solutions

The main challenge was keeping driver location updates smooth without draining battery. Writing raw GPS coordinates to Firestore on every location update would hit both write limits and battery hard. The solution was a threshold-based update strategy: a new write only fires when the driver has moved more than 30 metres or 5 seconds have elapsed, reducing writes by ~70% while keeping the rider map visually accurate.

Driver matching required preventing two riders from matching the same driver simultaneously. This was solved with a Firestore transaction that atomically checks driver availability status before writing the match — if the driver was already taken, the transaction fails and the next nearest driver is tried.
