module.exports = (app) => {
  const activeprojects = require('../controllers/activeprojects.controller');

  app.get('/activeprojects', activeprojects.findAll);
  app.post('/activeprojects', activeprojects.create);
  app.delete('/activeprojects/:activeprojects_id', activeprojects.delete);

};