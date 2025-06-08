const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/login.controllers');
const { authenticateToken } = require('../middlwares/user.middlwares');
const multer = require('multer');

// Configure multer for profile image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({ 
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Only images are allowed'));
        }
        cb(null, true);
    }
});

router.post('/signup', [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Please include a valid email'),
    body('location').optional().trim(),
    body('phone').optional().matches(/^(\+\d{1,3}[- ]?)?\d{10}$/).withMessage('Invalid phone number format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], userController.signupUser);

router.post('/login', [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], userController.loginUser);

// Get profile
router.get('/profile', authenticateToken, userController.getProfile);

// Update profile with image upload
router.put('/profile', authenticateToken, upload.single('profileImage'), [
    body('username').optional().notEmpty().withMessage('Username cannot be empty'),
    body('email').optional().isEmail().withMessage('Please include a valid email'),
    body('location').optional().trim(),
    body('phone').optional().matches(/^(\+\d{1,3}[- ]?)?\d{10}$/).withMessage('Invalid phone number format')
], userController.updateProfile);

// Delete profile
router.delete('/profile', authenticateToken, userController.deleteProfile);

module.exports = router;