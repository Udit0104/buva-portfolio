---
title: "iaehi.in — Employee Happiness Index"
description: "A quiz-based web application that assesses employee happiness through structured, research-backed questions. A custom algorithm analyses responses from 1,000+ employees to generate personalised Happiness Index scores, backed by secure bcrypt authentication and MongoDB."
image: "../../assets/images/iaehi.svg"
projectUrl: "https://iaehi.in"
technologies: ["Node.js", "Express", "MongoDB", "bcrypt", "JavaScript", "HTML"]
icon: "user"
featured: true
publishedDate: 2024-03-10
order: 6
---

# iaehi.in — Employee Happiness Index

iaehi.in is a full-stack web platform that turns a structured quiz into a quantified, actionable happiness score for every employee. It was built to give organisations a data-driven lens on workforce wellbeing — deployed live at [iaehi.in](https://iaehi.in) and tested across 1,000+ employee responses.

## 🚀 Key Features

- **Research-backed quiz** — A carefully structured question set designed around recognised workplace wellbeing dimensions: recognition, growth, team culture, and work-life balance.
- **Custom Happiness Index algorithm** — A bespoke scoring engine that weights responses across categories and produces a personalised Happiness Index score for each employee, not just a raw average.
- **Employee authentication** — Secure sign-up and login using bcrypt password hashing, so every assessment is tied to a verified individual account.
- **Assessment history** — All past quiz results are stored in MongoDB and retrievable on demand, letting employees and managers track happiness trends over time.
- **Scalable data layer** — MongoDB's document model handles 1,000+ employee records with no performance degradation on reads or history retrieval.

## 🛠️ Technical Highlights

- **Backend:** Node.js with Express — clean REST API handling quiz submission, score computation, and authentication flows.
- **Algorithm:** A custom scoring function that maps each question's response to a weighted sub-score per category (Work-Life, Recognition, Growth, Team Culture), then aggregates them into a single 0–100 Happiness Index. Weights were derived from workplace psychology research to ensure the score reflects real wellbeing, not surface-level sentiment.
- **Auth:** User accounts protected by bcrypt hashing (salt rounds = 12); session management via server-side tokens.
- **Database:** MongoDB stores user profiles, raw quiz responses, and computed scores as documents, making historical queries fast and the schema easy to evolve as new question sets are added.
- **Frontend:** Server-rendered HTML with vanilla JavaScript for the interactive quiz flow — no heavy framework, fast load on any device.
- **Deployment:** Live at [iaehi.in](https://iaehi.in) in a production Node.js environment.

## 💡 Challenges & Solutions

Ensuring the Happiness Index felt meaningful rather than arbitrary was the hardest design problem. The solution was to ground every question and its weighting in published workplace wellbeing frameworks, then validate the output distribution across the initial dataset — scores cluster naturally around the 60–80 range for healthy teams and drop below 50 for teams with systemic issues, matching expected real-world distributions.

At 1,000+ employees the naive approach of re-querying all historical records on every dashboard load became slow. This was solved by persisting the computed index score alongside the raw responses at write time, so the history page is a lightweight indexed lookup rather than a re-computation on every request.
