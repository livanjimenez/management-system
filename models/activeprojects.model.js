const mongoose = require('mongoose');

const ActiveProjectsSchema = mongoose.Schema({
  newProjectName: String,

});

module.exports = mongoose.model('Active-Projects', ActiveProjectsSchema);