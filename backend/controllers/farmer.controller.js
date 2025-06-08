// backend/controllers/farmer.controller.js
const Farmer = require('../models/farmer.model');

// @desc Login or Register Farmer
exports.loginFarmer = async (req, res) => {
  const { farmerName, farmerEmail, farmerPhone, farmerLocation } = req.body;

  if (!farmerName || !farmerEmail || !farmerPhone || !farmerLocation) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    let farmer = await Farmer.findOne({ farmerEmail });

    if (!farmer) {
      // Register new farmer if not found
      farmer = new Farmer({ farmerName, farmerEmail, farmerPhone, farmerLocation });
      await farmer.save();
    }

    return res.status(201).json({ message: "Farmer login successful", farmer });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};
