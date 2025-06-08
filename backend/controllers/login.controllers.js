const userModel = require('../models/user.login.model');
const { validationResult } = require('express-validator');

module.exports.signupUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, email, password, location, phoneNumber } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // Create new user
        const hashedPassword = await userModel.hashPassword(password);
        const newUser = new userModel({
            username,
            email,
            password: hashedPassword,
            location,
            phoneNumber
        });

        await newUser.save();

        const token = newUser.generateAuthToken();
        res.status(201).json({ token, user: newUser });
    } catch (error) {
        next(error);
    }
};

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404).json({ errors: errors.array() });
        }

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Fetch the user and select password
        const user = await userModel.findOne({ username }).select('+password');
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = user.generateAuthToken();
        res.status(200).json({ token, user });
    } catch (error) {
        next(error);
    }
};

// Get Profile
module.exports.getProfile = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
};

module.exports.updateProfile = async (req, res, next) => {
    try {
        const userId = req.user._id;
        let updateData = { ...req.body };

        // Handle profile image update
        if (req.file) {
            updateData.profileImage = `/uploads/${req.file.filename}`;
        }

        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $set: updateData },
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Remove password from response
        const userResponse = updatedUser.toObject();
        delete userResponse.password;

        res.status(200).json({ 
            message: "Profile updated successfully",
            user: userResponse
        });
    } catch (error) {
        next(error);
    }
};

// Delete Profile
module.exports.deleteProfile = async (req, res, next) => {
    try {
        const userId = req.user._id;
        
        const deletedUser = await userModel.findByIdAndDelete(userId);
        
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ 
            message: "Profile deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};