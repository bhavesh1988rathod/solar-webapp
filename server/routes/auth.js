const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

// POST /api/auth/login
router.post('/login', login);

// (Add additional routes for register, forgot password as needed)

module.exports = router;
