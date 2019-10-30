module.exports = (app) => {
  const modules = require('../controllers/module.controller');

  app.post('/modules', modules.create);
  
  app.get('/modules', modules.findAll);
  app.get('/modules/:module_id', modules.findOne);

  app.put('/modules/:module_id', modules.update);

  app.delete('/modules/:module_id', modules.delete);

};