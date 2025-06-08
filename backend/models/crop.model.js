const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
  cropName: String,
  cropType: String,
  season: String,
  quantity: Number,
  unit: String,
  farmLocation: String,
  soilType: String,
  irrigationType: String,
  fertilizerUsed: String,
  pesticideUsed: String,
  pricePerUnit: Number,
  marketName: String,
  harvestingDate: Date,
  sowingDate: Date,
  cropDuration: Number,
  qualityGrade: String,
  storageType: String,
  weatherCondition: String,
  organicCertified: String, // "Yes" or "No"
  farmerNotes: String
}, { timestamps: true });

module.exports = mongoose.model("farmcropdata", cropSchema);
