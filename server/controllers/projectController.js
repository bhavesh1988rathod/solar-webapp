const Project = require('../models/Project');

// Add New Project
exports.addProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ message: 'Project added successfully.', project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error.' });
  }
};

// Update Existing Project
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body, { new: true });
    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }
    res.status(200).json({ message: 'Project updated successfully.', project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error.' });
  }
};

// Delete Project
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }
    res.status(200).json({ message: 'Project deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error.' });
  }
};
