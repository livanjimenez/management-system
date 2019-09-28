const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('HELLO WORLD');
});

app.listen(port, () => console.log(`Listening on ${port}`));
