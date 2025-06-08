const Animal = require('../models/animal');
const { validationResult } = require('express-validator');

module.exports.animalform = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { animalname, age, type, location, description } = req.body;

    const newAnimal = new Animal({
      animalname,
      age,
      type,
      location,
      description,
    });

    const saved = await newAnimal.save();
    res.status(201).json({ message: "Animal added successfully", animal: saved });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
