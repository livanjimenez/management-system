const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// middleware
// parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
require('./routes/module.routes')(app);
require('./routes/activeprojects.routes')(app);

// enable CORS for all HTTP methods
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB is connected successfully!'))
  .catch(err => console.log(err));

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

// Test for backend working
app.get('/', (req, res) => {
  res.json({ "helloWorld": "Hello World!" });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));
