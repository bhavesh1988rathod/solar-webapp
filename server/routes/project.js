const express = require('express');
const router = express.Router();
const { addProject, updateProject, deleteProject } = require('../controllers/projectController');

// POST /api/project - add new project
router.post('/', addProject);

// PUT /api/project/:id - update project
router.put('/:id', updateProject);

// DELETE /api/project/:id - delete project
router.delete('/:id', deleteProject);

module.exports = router;
