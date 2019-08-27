const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('HELLO WORLD');
});

app.listen(port, () => console.log(`Listening on ${port}`));