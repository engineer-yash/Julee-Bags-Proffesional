const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const {
  submitContact,
  getContacts,
  deleteContact,
} = require('../controllers/contactController');

// Public route
router.post('/', submitContact);

// Protected routes (Admin only)
router.get('/', authMiddleware, getContacts);
router.delete('/:id', authMiddleware, deleteContact);

module.exports = router;
