const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');
const passport = require('passport');
const validatePostInput = require('../../validation/post');

router.get('/', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // user, should be an admin
    Post.find({ user: req.user.user_name })
      .then(posts => res.status(200).json(posts))
      .catch(err => res
        .status(400)
        .json({ user: "Error when fetching posts of logged in user!" }));
  }
);

router.get('/user/:user', (req, res) => {
  Post.find({ user: req.params.user })
    .then(posts => res.status(200).json(posts))
    .catch(err => res
      .status(400)
      .json({ user: "Error when fetching posts of specific user" }));
});

router.post('/create',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const user = req.user.user_name;
    const post = req.body;
    const { errors, isValid } = validatePostInput(post);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    post.user = user;

    const newPost = new Post(post);

    newPost
      .save()
      .then(data => res.json(data))
      .catch(err => console.log({ create: "Error when creating a new post!" }));
  }
);

router.patch('/update/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const user = req.user.user_name;
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // might have to change to module and id?
    const { title, body } = req.body;
    Post.findOneAndUpdate(
      { user, _id: req.params.id },
      { $set: { title, body } },
      { new: true }
    )
      .then(data => res.status(200).json(data))
      .catch(err => res.status(400).json({ update: 'Error when updating exisiting post!' }));

  }
);

router.delete(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const user = req.user.user_name;

    Post.findByIdAndDelete({ user, _id: req.params.id })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(400).json({ delete: 'Error when deleting a post!' }));
  }
);