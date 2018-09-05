import React from 'react';
import PropTypes from 'prop-types';

const InputFieldGroup = ({ input, placeholder, type, meta: { touched, error } }) => {
  const rootClassName = "form-control form-control-lg";
  return (
    <div className="form-group">
      <input className={rootClassName} {...input} placeholder={placeholder} type={type} />
      {touched && error && <div className={error ? "is-invalid" : ""}>{error}</div>}
    </div>
  );
};

InputFieldGroup.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape().isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

InputFieldGroup.defaultProps = {
  type: 'text'
};

export default InputFieldGroup;
