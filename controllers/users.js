const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');

const UserModel = require('../models').UserModel;
const config = require('../config/keys');
const validateRegiserForm = require('../validation/register').registerUser;
const validateLoginForm = require('../validation/login').validateUser;

module.exports.registerUser = (req, res, next) => {
  const { errors, isValid } = validateRegiserForm(req.body);
  if (!isValid) return res.status(400).json(errors);

  UserModel.findOne({ email: req.body.email })
  .then(user => {

    if (user) return res.status(400).send({ email: `${req.body.email} is already exist` });

    const avatar = gravatar.url(req.body.email, { s: '200', r: 'pg', d: 'mm' });
    const newUser = new UserModel({
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

  })
  .catch(err => next(err));
};


module.exports.loginUser = (req, res, next) => {
  const { errors, isValid } = validateLoginForm(req.body);
  if (!isValid) return res.status(400).json({ errors });

  UserModel.findOne({ email: req.body.email })
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
  })
  .catch(err => next(err));
};


module.exports.getCurrentUser = (req, res, next) => {
  try {
    res.json(req.user);
  }
  catch (err) {
    next(err);
  }
};
