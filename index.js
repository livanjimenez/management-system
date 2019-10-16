const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Mongo connection is successful'))
  .catch(err => console.log(err));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));
