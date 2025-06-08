const User = require('../models/user.login.model');
const bcrypt = require('bcrypt');

class UserService {
    // Create new user
    async createUser(username, email, password) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({
                username,
                email,
                password: hashedPassword
            });
            return await user.save();
        } catch (error) {
            throw new Error('Error creating user: ' + error.message);
        }
    }

    // Find user by email
    async findUserByEmail(email) {
        try {
            return await User.findOne({ email });
        } catch (error) {
            throw new Error('Error finding user: ' + error.message);
        }
    }

    // Find user by username
    async findUserByUsername(username) {
        try {
            return await User.findOne({ username });
        } catch (error) {
            throw new Error('Error finding user: ' + error.message);
        }
    }

    // Update user
    async updateUser(userId, updateData) {
        try {
            if (updateData.password) {
                updateData.password = await bcrypt.hash(updateData.password, 10);
            }
            return await User.findByIdAndUpdate(userId, updateData, { new: true });
        } catch (error) {
            throw new Error('Error updating user: ' + error.message);
        }
    }

    // Validate password
    async validatePassword(inputPassword, hashedPassword) {
        try {
            return await bcrypt.compare(inputPassword, hashedPassword);
        } catch (error) {
            throw new Error('Error validating password: ' + error.message);
        }
    }
}

module.exports = new UserService();