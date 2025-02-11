const User = require('../models/User');

// Update User Profile
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    // For security, in production you would validate which fields can be updated
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.status(200).json({ message: 'Profile updated successfully.', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error.' });
  }
};
