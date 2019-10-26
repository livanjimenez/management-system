const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = {
  module: {
    type: String,
    required: true
  },
  // TODO: add detailed schemas for amepower's modules
};

const PostSchema = new Schema(post);
module.exports = mongoose.model('posts', PostSchema);