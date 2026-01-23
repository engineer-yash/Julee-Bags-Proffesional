const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { login, getMe } = require('../controllers/authController');

// Public routes
router.post('/login', login);

// Protected routes
router.get('/me', authMiddleware, getMe);

module.exports = router;
