const Observation = require('../models/sea.model');

// POST - Add Observation
exports.createObservation = async (req, res) => {
  try {
    const {
      observerName, date, time, location, temperature, windSpeed,
      waveHeight, cloudCover, waterColor, skyColor, mood,
      photographer, cameraUsed, email, description
    } = req.body;

    const newObservation = new Observation({
      observerName, date, time, location, temperature, windSpeed,
      waveHeight, cloudCover, waterColor, skyColor, mood,
      photographer, cameraUsed, email, description
    });

    await newObservation.save();
    res.status(201).json({ message: "Observation saved successfully", observation: newObservation });
  } catch (error) {
    res.status(500).json({ error: "Failed to save observation", details: error.message });
  }
};

// GET - All Observations
exports.getAllObservations = async (req, res) => {
  try {
    const observations = await Observation.find().sort({ createdAt: -1 });
    res.status(200).json(observations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch observations" });
  }
};
