const PostModel = require('../models').PostModel;
const UserModel = require('../models').UserModel;
// const validateProfileInput = require('../validation/profile');


module.exports.createPost = (req, res) => {
  PostModel.findOne({ id: req.user.id })
  .then(post => {
    if (post) {
      console.log('update here..');
    }
    else {
      const { text } = req.body;
      const newPost = { text };
      new PostModel(newPost).save()
      .then(post => res.json(post))
      .catch(err => res.status(400).json(err));
    }
  });
};
