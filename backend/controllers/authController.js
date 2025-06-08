const jwt = require("jsonwebtoken");
const userModel = require("../models/user.login.model");

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Password check – bcrypt use karo (if hashed)
    const isMatch = password === user.password; // Use bcrypt.compare in production
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "JWT_SECRET", { expiresIn: "1h" });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
