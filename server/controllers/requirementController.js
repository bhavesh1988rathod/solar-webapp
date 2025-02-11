const Requirement = require('../models/Requirement');

// Add New Requirement
exports.addRequirement = async (req, res) => {
  try {
    const requirement = await Requirement.create(req.body);
    res.status(201).json({ message: 'Requirement posted successfully.', requirement });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error.' });
  }
};

// Update Requirement
exports.updateRequirement = async (req, res) => {
  try {
    const { id } = req.params;
    const requirement = await Requirement.findByIdAndUpdate(id, req.body, { new: true });
    if (!requirement) {
      return res.status(404).json({ error: 'Requirement not found.' });
    }
    res.status(200).json({ message: 'Requirement updated successfully.', requirement });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error.' });
  }
};
