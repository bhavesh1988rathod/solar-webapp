const express = require('express');
const router = express.Router();
const { updateUser } = require('../controllers/userController');

// PUT /api/user/:id - update user profile
router.put('/:id', updateUser);

module.exports = router;
