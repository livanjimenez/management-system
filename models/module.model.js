const mongoose = require('mongoose');

const ModuleSchema = mongoose.Schema({
  // not complete, needs to be updated with more data
  serial_id: String,
  location: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Module', ModuleSchema);