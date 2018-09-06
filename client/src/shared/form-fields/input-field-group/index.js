import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const InputFieldGroup = ({ input, info, placeholder, type, meta: { touched, error } }) => {
  const rootClassList = classNames('form-control form-control-lg', {
    'is-invalid': error
  });
  return (
    <div className="form-group">
      <input className={rootClassList} {...input} placeholder={placeholder} type={type} />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputFieldGroup.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape().isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string
};

InputFieldGroup.defaultProps = {
  type: 'text'
};

export default InputFieldGroup;
