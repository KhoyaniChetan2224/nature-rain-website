// // controllers/userController.js
// const User = require('../models/user.login.model');
// const path = require('path');
// const fs = require('fs');

// exports.updateProfile = async (req, res) => {
//   try {
//     const userId = req.params.id;  // assuming user id comes as URL param
//     const { username, email, location, phone } = req.body;
//     let profilePhoto;

//     // If a file was uploaded, get the filename or path
//     if (req.file) {
//       profilePhoto = req.file.filename;  // or req.file.path depending on setup
//     }

//     // Find the user by id
//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Update fields if provided
//     if (username) user.username = username;
//     if (email) user.email = email;
//     if (location) user.location = location;
//     if (phone) user.phone = phone;
//     if (profilePhoto) {
//       // Optional: Delete old profile photo from storage if exists
//       if (user.profilePhoto) {
//         const oldPath = path.join(__dirname, '../uploads/', user.profilePhoto);
//         fs.unlink(oldPath, (err) => { if (err) console.error(err); });
//       }
//       user.profilePhoto = profilePhoto;
//     }

//     await user.save();

//     return res.json({ message: "Profile updated successfully", user });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };


const User = require('../models/user.login.model');
const path = require('path');
const fs = require('fs');

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, email, location, phone } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Update values only if provided
    if (username) user.username = username;
    if (email) user.email = email;
    if (location) user.location = location;
    if (phone) user.phone = phone;

    // Handle profile photo update
    if (req.file) {
      // Optional: Delete old photo
      if (user.profilePhoto) {
        const oldPath = path.join(__dirname, '../profile/', user.profilePhoto);
        fs.unlink(oldPath, (err) => { if (err) console.error(err); });
      }

      user.profilePhoto = req.file.filename;
    }

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
