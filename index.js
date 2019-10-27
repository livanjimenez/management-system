const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const users = require('./routes/api/users');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Mongo connection is successful'))
  .catch(err => console.log(err));

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

// initialize passport
app.use(passport.initialize());
require('./middleware/passport')(passport);

// Routes
app.use('/api/users/', users);
app.use('/api/posts/', require('./routes/api/posts'));

// Ready for production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));
