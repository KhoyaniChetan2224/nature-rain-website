const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  animalname: {
    type: String,
    required: true,
    minlength: [2, "Animal name must be at least 2 characters long"],
  },
  age: {
    type: String,
    required: true,
    
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [5, "Description must be at least 5 characters long"],
  },
});

module.exports = mongoose.model("Animal", animalSchema);
