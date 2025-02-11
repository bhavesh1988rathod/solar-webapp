const mongoose = require('mongoose');

const RequirementSchema = new mongoose.Schema({
  capacity: { type: String, required: true }, // e.g., "100 KW" or "1 MW"
  dailyEnergyNeeds: { type: Number, required: true },
  location: { type: String, required: true },
  installationType: { type: String, enum: ['Rooftop', 'Ground Mount'] },
  seasonalChanges: { type: String },
  expectedRate: { type: Number },
  currency: { type: String, default: 'USD' },
  tenure: { type: Number },
  lockInPeriod: { type: Number },
  securitiesOffered: { type: String },
  consumptionVoltage: { type: String },
  // For file uploads (store file URLs or paths)
  creditRatingDocs: [{ type: String }],
  financialDocs: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Requirement', RequirementSchema);
