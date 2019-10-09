const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on ${port}`));
// parse JSON (application/json content-type)
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('homepage for backend!');
});