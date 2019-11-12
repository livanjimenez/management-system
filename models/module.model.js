const mongoose = require('mongoose');

const ModuleSchema = mongoose.Schema({
  // not complete, needs to be updated with more data
  serial_id: { type: String, unique: true },
  location: String,
  number: Number,
}, {
  timestamps: true
});

module.exports = mongoose.model('Module', ModuleSchema);