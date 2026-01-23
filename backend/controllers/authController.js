const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d',
  });
};

// @desc    Admin Login
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      res.status(400);
      throw new Error('Please provide email and password');
    }

    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      res.status(401);
      throw new Error('Invalid credentials');
    }

    // Check password
    const isPasswordMatch = await admin.comparePassword(password);
    if (!isPasswordMatch) {
      res.status(401);
      throw new Error('Invalid credentials');
    }

    // Generate token
    const token = generateToken(admin._id);

    res.status(200).json({
      success: true,
      data: {
        id: admin._id,
        email: admin.email,
        token,
      },
      message: 'Login successful',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get admin profile
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        id: req.admin._id,
        email: req.admin.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  getMe,
};
