const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  capacityUnit: { type: String, enum: ['KW', 'MW'], default: 'KW' },
  expectedROI: { type: Number },
  minInvestment: { type: Number },
  status: { type: String, enum: ['open', 'closed'], default: 'open' },
  // Image URLs for the project
  locationImage: { type: String },
  thumbnail: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
