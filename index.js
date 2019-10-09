const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on ${port}`));
// parse JSON (application/json content-type)
app.use(bodyParser.json());

let data = require('./data');

app.get('/items', (req, res) => {
  res.json(data);
});

app.get('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const item = data.find(_item => _item.id === itemId);
  
  if (item) {
    res.json(item);
  } else {
    res.json({message: `item ${itemId} doesn't exist!` });
  }
});

app.post('/items', (req, res) => {
  const item = req.body;
  console.log('Adding new item: ', item);

  data.push(item);
  res.json(data);
});