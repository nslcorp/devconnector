import React from 'react';
import PropTypes from 'prop-types';

const InputFieldGroup = ({ input, className, placeholder, type, meta: { touched, error } }) => (
  <div className="form-group">
    <input className={className} {...input} placeholder={placeholder} type={type} />
    {touched && error && <div className={error ? "is-invalid" : ""}>{error}</div>}
  </div>
);

InputFieldGroup.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape().isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default InputFieldGroup;
