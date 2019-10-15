const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', (req ,res) =>{
  console.log(req.body);
  res.send(req.body);
});