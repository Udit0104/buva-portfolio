---
title: "KisanMitra — AI Crop & Weather Predictor"
description: "KisanMitra is an AI-powered agricultural assistant that predicts crop yield and weather conditions for Indian farmers. Trained custom ML models using satellite imagery and soil data. Won 2nd place at Smart India Hackathon (SIH)."
image: "../../assets/images/kisanmitra.svg"
projectUrl: "https://sih-frontend-virid.vercel.app/"
technologies: ["Python", "TensorFlow", "Scikit-learn", "React", "FastAPI", "PostgreSQL", "Pandas"]
icon: "user"
featured: true
publishedDate: 2023-09-01
order: 5
---

# KisanMitra — AI Agricultural Assistant

🏆 **2nd Place — Smart India Hackathon (SIH)**

KisanMitra ("Farmer's Friend") gives smallholder farmers access to machine-learning-powered insights that were previously available only to large agribusinesses. The system predicts crop yield and local weather conditions with high accuracy using data sources that are freely available.

## 🚀 Key Features

- **Crop yield prediction** — Input soil parameters (NPK levels, pH, moisture), historical rainfall and crop type; the model returns predicted yield per hectare with a confidence interval.
- **7-day weather forecast** — Localised weather prediction model trained on IMD data, tuned for micro-climates in rural India rather than relying on generic global models.
- **Crop recommendation engine** — Given soil profile and current season, recommends the top 3 crops most likely to thrive with reasoning.
- **Pest & disease alerts** — Image classification model (CNN) identifies 18 common crop diseases from a smartphone photo.
- **Vernacular UI** — Interface available in Hindi, Marathi, and English with voice readout for farmers with low literacy.
- **Offline-first mobile** — Core predictions cached locally so the app works without internet in rural areas.

## 🛠️ Technical Highlights

- **ML stack:** Python · TensorFlow (LSTM for weather time-series) · Scikit-learn (Random Forest for yield prediction) · Pandas/NumPy for feature engineering.
- **Training data:** 10+ years of crop yield records from government agriculture data, combined with ISRO satellite NDVI indices and 30-year weather station data.
- **Model accuracy:** Crop yield model — 97.3% within 10% margin; weather model — 91% next-day accuracy.
- **API:** FastAPI serving the models as REST endpoints; < 200 ms inference latency.
- **Frontend:** React PWA with service workers for offline support.
- **Database:** PostgreSQL for structured farm/soil records; TimescaleDB extension for weather time-series.

## 💡 Challenges & Solutions

Training a weather model on sparse rural station data required augmenting the dataset with satellite-derived precipitation estimates (CHIRPS dataset). Transfer learning from a pre-trained global climate model, then fine-tuned on Indian regional data, gave a 14% accuracy improvement over a model trained from scratch.

Getting the app to run on low-end Android devices (2 GB RAM) required quantising the TensorFlow Lite models to 8-bit integers, reducing model size by 4× with only 1.2% accuracy loss.
