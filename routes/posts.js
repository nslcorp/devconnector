const express = require('express');
const router = express.Router();
const passport = require('passport');

const postsController = require('../controllers').postsController;


router.post('/', passport.authenticate('jwt', { session: false }), postsController.createPost);


module.exports = router;
