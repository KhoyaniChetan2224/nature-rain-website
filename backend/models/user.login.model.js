const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, 'Username must be at least 3 characters long'],
    },
    email: {
        type: String,
        unique: true, // Ensure email is unique
        required: true,
        minLength: [3, 'Email must be at least 3 characters long'],
    },
    location: {
        type: String,
        required: false,
        default: ''
    },
    phone: {
        type: String,
        required: false,
        default: '',
        match: [/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Please enter a valid phone number']
    },
    password: {
        type: String,
        required: true,
        select: false, // Ensure password is not selected by default
        minLength: [6, 'Password must be at least 6 characters long'],
    },
    profileImage: {
        type: String,
        default: 'https://i.pinimg.com/736x/61/95/ff/6195ffcadbdb8bf6282645692817de64.jpg'
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
};

userSchema.methods.comparePassword = async function (password) {
    if (!this.password) {
        throw new Error('Password hash is not available for comparison');
    }
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;