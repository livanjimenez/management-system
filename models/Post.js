const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = {
  serial_number: {
    type: String,
    required: true
  },
  creation_date: {
    type: String,
    required: true
  }
};

const PostSchema = new Schema(post);
module.exports = mongoose.model('posts', PostSchema);