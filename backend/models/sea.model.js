const mongoose = require("mongoose");

const observationSchema = new mongoose.Schema(
  {
    observerName: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    temperature: { type: String, required: true },
    windSpeed: { type: String, required: true },
    waveHeight: { type: String, required: true },
    cloudCover: { type: String, required: true },
    waterColor: { type: String, required: true },
    skyColor: { type: String, required: true },
    mood: { type: String },
    photographer: { type: String },
    cameraUsed: { type: String },
    email: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Observation", observationSchema);
