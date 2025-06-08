// const Rain = require('../models/rain.models');
// const { validationResult } = require('express-validator');

// module.exports.createRainInfo = async (req, res, next) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { title, type, description, src } = req.body;

//     const newRain = new Rain({
//       title,
//       type,
//       description,
//       src,
//     });

//     const saved = await newRain.save();
//     res.status(201).json({ message: "Rain added successfully", raininfo: saved });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



const Rain = require('../models/rain.models');
const { validationResult } = require('express-validator');

module.exports.createRainInfo = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, type, description, src } = req.body;

    const newRain = new Rain({ title, type, description, src });
    const saved = await newRain.save();

    res.status(201).json({
      message: 'Rain information added successfully',
      raininfo: saved
    });
  } catch (error) {
    console.error('Error creating rain info:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// module.exports.getRainInfo = async (req, res) => {
//   try {
//     const data = await Rain.find().sort({ createdAt: -1 });
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch rain information' });
//   }
// };
