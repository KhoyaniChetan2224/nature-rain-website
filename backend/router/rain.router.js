// const express = require("express");
// const router = express.Router();
// const { body } = require('express-validator');
// const rainController = require("../controllers/rain.controller");

// router.post(
//   '/raininfo',
//   [
//     body('title').notEmpty().withMessage('Title name is required'),
//     body('type').isNumeric().withMessage('type must be a number'),
//     body('description').notEmpty().withMessage('description is required'),
//     body('src').notEmpty().withMessage('Path is required'),
//   ],
//   rainController.createRainInfo
// );

// module.exports = router;



const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const rainController = require('../controllers/rain.controller');

router.post(
  '/rain',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('type').isIn(['image', 'video']).withMessage('Type must be either image or video'),
    body('description').notEmpty().withMessage('Description is required'),
    body('src').notEmpty().withMessage('Media path is required'),
  ],
  rainController.createRainInfo
);

// router.get('/raininfo', rainController.getRainInfo);

module.exports = router;
