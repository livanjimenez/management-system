const express = require('express');
const router = express.Router();

router.get('/modules', (req, res) =>{
  res.send({type: 'GET'});
});

router.post('/modules', (req, res) =>{
  res.send({type: 'POST'});
});

router.put('/modules/:id', (req, res) =>{
  res.send({type: 'PUT'});
});

router.delete('/modules/:id', (req, res) =>{
  res.send({type: 'DELETE'});
});

module.exports = router;