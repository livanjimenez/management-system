const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/api');

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));

// parse JSON (application/json content-type)
app.use(bodyParser.json());
app.use('/api', routes);
