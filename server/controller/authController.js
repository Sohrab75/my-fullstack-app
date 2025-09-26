const User = require('../models/userLogin');
const bcrypt = require('bcryptjs');

// Signup controller
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role, gender } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'user',
      profilePicture,
      gender: gender || 'other',
    });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const jwt = require('jsonwebtoken');

// Login controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email, role: user.role, profilePicture: user.profilePicture },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1h' }
    );
    res.json({
      message: 'Login successful',
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, profilePicture: user.profilePicture }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
