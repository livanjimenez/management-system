const mongoose = require('mongoose');

const ModuleSchema = mongoose.Schema({
  // not complete, needs to be updated with more data
  serial_id: { type: String, unique: true },
  location: String,
  reason: String,
  description: String,
  Shipping_from: String,
  Shipping_to: String,
  Receiving_from: String,
  Tested_for: String,
  Tested_by: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Module', ModuleSchema);