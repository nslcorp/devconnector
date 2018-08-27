const express = require('express');
const router = express.Router();
const passport = require('passport');

const postsController = require('../controllers').postsController;


router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);

router.post('/', passport.authenticate('jwt', { session: false }), postsController.createPost);
router.post('/like/:id', passport.authenticate('jwt', { session: false }), postsController.likePost);
router.post('/unlike/:id', passport.authenticate('jwt', { session: false }), postsController.unlikePost);

router.delete('/:id', passport.authenticate('jwt', { session: false }), postsController.deletePost);


module.exports = router;
