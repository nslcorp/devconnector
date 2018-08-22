const validator = require('validator');
const isEmpty = require('./utils').isEmpty;

const validateUser = (data) => {
  const errors = {};

  const email = !isEmpty(data.email) ? data.email : '';
  const password = !isEmpty(data.password) ? data.password : '';

  if (!validator.isEmail(email)) {
    errors.email = `${email} is incorrect`;
  }
  if (!validator.isLength(password, { min: 4, max: 10 })) {
    errors.password = 'Password must be between 4 and 10 chars';
  }

  if (!email || validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  }
  if (!password || validator.isEmpty(password)) {
    errors.password = 'Password field is required';
  }

  return { errors, isValid: isEmpty(errors) };
};

module.exports = { validateUser };
