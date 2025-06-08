const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const profileController = require('../controllers/profile.controllers');
const upload = require('../middlwares/uplod');


router.put(
  '/:id/update',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Please include a valid email'),
    body('location').optional().trim(),
    body('phone').optional().matches(/^(\+\d{1,3}[- ]?)?\d{10}$/).withMessage('Invalid phone number format'),
  ], upload, 
  profileController.updateProfile
);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/profile.controllers');
// const upload = require('../middlwares/uplod');

// // PUT /api/users/:id/profile
// router.put('/profile', upload.single('profilePhoto'), userController.updateProfile);

// module.exports = router;
