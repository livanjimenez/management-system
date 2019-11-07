const ActiveProjects = require('../models/activeprojects.model');

exports.create = (req, res) => {
  const activeprojects = new ActiveProjects({
    newProjectName: req.body.newProjectName
  });

  activeprojects.save()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Unable to create a new project!'
      });
    });
};

exports.findAll = (req, res) => {
  ActiveProjects.find()
    .then(project => {
      res.send(project);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.delete = (req, res) => {
  ActiveProjects.findByIdAndRemove(req.params.activeprojects_id)
    .then(project => {
      if (!project) {
        return res.status(404).send({
          message: 'Module not found with id ' + req.params.activeprojects_id
        });
      }

      res.send({ message: 'Project deleted successfully!'});
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Project not found with id " + req.params.activeprojects_id
        });
      }
      return res.status(500).send({
        message: "Unable to delete project with id " + req.params.activeprojects_id
      });
    });
};