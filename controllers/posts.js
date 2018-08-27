const PostModel = require('../models').PostModel;
const ProfileModel = require('../models').ProfileModel;
const validatePostInput = require('../validation/post');

module.exports.getAllPosts = (req, res) => {
  PostModel.find()
  .sort({ date: -1 })
  .then(posts => {
    res.json(posts);
  })
  .catch(err => res.status(404).json(err));
};

module.exports.getPostById = (req, res) => {
  PostModel.findById(req.params.id)
  .then(posts => res.json(posts))
  .catch(err => res.status(404).json(err));
};

module.exports.createPost = (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  // Check Validation
  if (!isValid) {
    // If any errors, send 400 with errors object
    return res.status(400).json(errors);
  }

  const newPost = new PostModel({
    text: req.body.text,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user.id
  });

  newPost.save().then(post => res.json(post));
};


module.exports.likePost = (req, res) => {
  ProfileModel.findOne({ user: req.user.id }).then(() => {
    PostModel.findById(req.params.id)
    .then(post => {
      const likes = post.likes.filter(like => like.user.toString() === req.user.id);
      if (likes.length > 0) {
        return res
        .status(400)
        .json({ alreadyliked: 'User already liked this post' });
      }

      // Add user id to likes array
      post.likes.unshift({ user: req.user.id });

      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json(err));
  });
};

module.exports.unlikePost = (req, res) => {
  ProfileModel.findOne({ user: req.user.id }).then(() => {
    PostModel.findById(req.params.id)
    .then(post => {
      if (
        post.likes.filter(like => like.user.toString() === req.user.id)
          .length === 0
      ) {
        return res
        .status(400)
        .json({ notliked: 'You have not yet liked this post' });
      }

      // Get remove index
      const removeIndex = post.likes
      .map(item => item.user.toString())
      .indexOf(req.user.id);

      // Splice out of array
      post.likes.splice(removeIndex, 1);

      // Save
      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json(err));
  });
};



module.exports.deletePost = (req, res) => {
  ProfileModel.findOne({ user: req.user.id }).then(() => {
    PostModel.findById(req.params.id)
    .then(post => {
      // Check for post owner
      if (post.user.toString() !== req.user.id) {
        return res
        .status(401)
        .json({ notauthorized: 'User not authorized' });
      }

      // Delete
      post.remove().then(() => res.json({ success: true }));
    })
    .catch(err => res.status(404).json(err));
  });
};


