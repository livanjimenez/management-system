const Module = require('../models/module.model');

exports.create = (req, res) => {
  // request validation
  if (!req.body) {
    return res.status(400).send({
      message: "Empty module"
    });
  }

  // init module
  // not complete, needs to be updated with more data
  const module = new Module({
    serial_id: req.body.serial_id,
    location: req.body.location
  });

  // save module
  module.save()
    .then(data => {
      res.send(data); 
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Unable to create new module'
      });
    });
};

// retrieve all modules
exports.findAll = (req, res) => {
  Module.find()
    .then(module => {
      res.send(module);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

// Find a single module using module_id
exports.findOne = (req, res) => {
  Module.findById(req.params.module_id)
    .then(module => {
      if (!module) {
        return res.status(404).send({
          message: 'Module not found with id ' + req.params.module_id
        });
      }
      
      res.send(module);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Module not found with id ' + req.params.module_id
        });
      }
      
      return res.status(500).send({
        message: 'Not able to retrieve module with id ' + req.params.module_id 
      });
    });
};

exports.update = (req, res) => {
  // finish this
};