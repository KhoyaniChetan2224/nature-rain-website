const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const animalController = require('../controllers/animal.controllers');

router.post(
  '/animal',
  [
    body('animalname').notEmpty().withMessage('Animal name is required'),
    body('age').isNumeric().withMessage('Age must be a number'),
    body('type').notEmpty().withMessage('Type is required'),
    body('location').notEmpty().withMessage('Location is required'),
    body('description').notEmpty().withMessage('Description is required'),
  ],
  animalController.animalform
);

module.exports = router;
