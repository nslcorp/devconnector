const validator = require('validator');
const isEmpty = require('./utils').isEmpty;

const validateUser = (data) => {
  const errors = {};

  const name = !isEmpty(data.name) ? data.name : '';
  const email = !isEmpty(data.email) ? data.email : '';
  const password = !isEmpty(data.password) ? data.password : '';
  const password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!validator.isLength(name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 chars';
  }
  if (!validator.isEmail(email)) {
    errors.email = `${email} is incorrect`;
  }
  if (!validator.isLength(password, { min: 4, max: 10 })) {
    errors.password = 'Password must be between 4 and 10 chars';
  }
  if (!validator.equals(password, password2)) {
    errors.password2 = 'Passwords must match';
  }

  if (!name || validator.isEmpty(name)) {
    errors.name = 'Name field is required';
  }
  if (!email || validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  }
  if (!password || validator.isEmpty(password)) {
    errors.password = 'Password field is required';
  }
  if (!password2 || validator.isEmpty(password2)) {
    errors.password2 = 'Confirm password field is required';
  }

  return { errors, isValid: isEmpty(errors) };
};

module.exports = { validateUser };
