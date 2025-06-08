// backend/models/farmer.model.js
const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  farmerName: {
    type: String,
    required: true,
    trim: true
  },
  farmerEmail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  farmerPhone: {
    type: String,
    required: true
  },
  farmerLocation: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Farmer', farmerSchema);
