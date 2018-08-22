const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../../../models/User');
const config = require('../../../config/keys');
const validateRegiserForm = require('../../../validation/register').validateUser;
const validateLoginForm = require('../../../validation/login').validateUser;


// @route   POST api/users
// @desc    creating new user
// @access  Public
router.post('/register', (req, res) => {

  const { errors, isValid } = validateRegiserForm(req.body);
  if (!isValid) return res.status(400).json(errors);

  User.findOne({ email: req.body.email })
  .then(user => {

    if (user) return res.status(400).send({ email: `${req.body.email} is already exist` });

    const avatar = gravatar.url(req.body.email, { s: '200', r: 'pg', d: 'mm' });
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;

        newUser.password = hash;
        newUser.save()
        .then(user => res.json(user))
        .catch(error => console.log(error));
      });
    });

  });
});

// @route   POST api/users/login
// @desc    Login user / Return JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginForm(req.body);
  if (!isValid) return res.status(400).json({ errors });

  User.findOne({ email: req.body.email })
  .then(user => {
    if (!user) {
      errors.email = 'Email was not found';
      return res.status(404).json({ errors });
    }

    bcrypt.compare(req.body.password, user.password)
    .then(isMatch => {
        if (isMatch) {
          const payload = { id: user._id, };
          const token = jwt.sign(payload, config.secretOrKey, { expiresIn: '3h' });

          return res.json({ success: true, token, payload });
        }
        errors.password = 'Password is incorrect';
        return res.status(404).json({ errors });
      }
    );
  });
});


// @route   GET api/users/current
// @param   Auth token
// @desc    Return user data
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json(req.user);
});


module.exports = router;

