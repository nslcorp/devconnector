const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/index').usersController;


// @route   POST api/users
// @desc    creating new user
router.post('/register', usersController.registerUser);

// @route   POST api/users/login
// @desc    Login user / Return JWT Token
router.post('/login', usersController.loginUser);


// @route   GET api/users/current
// @desc    Return user data
router.get('/current', passport.authenticate('jwt', { session: false }), usersController.getCurrentUser);


module.exports = router;

