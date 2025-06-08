const express = require('express');
const router = express.Router();
const observationController = require('../controllers/sea.cntrollers');

// Create a new observation
router.post('/sea', observationController.createObservation);

// Get all observations
router.get('/sea', observationController.getAllObservations);

module.exports = router;
