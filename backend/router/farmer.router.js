// backend/routes/farmer.router.js
const express = require('express');
const router = express.Router();
const { loginFarmer } = require('../controllers/farmer.controller');

router.post('/farm', loginFarmer);

module.exports = router;
