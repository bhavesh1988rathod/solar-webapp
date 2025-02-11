const express = require('express');
const router = express.Router();
const { addRequirement, updateRequirement } = require('../controllers/requirementController');

// POST /api/requirement - add new requirement
router.post('/', addRequirement);

// PUT /api/requirement/:id - update requirement
router.put('/:id', updateRequirement);

module.exports = router;
