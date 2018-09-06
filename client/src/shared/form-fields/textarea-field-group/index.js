import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TextareaFieldGroup = ({ input, placeholder, info, meta: { touched, error } }) => {
  const rootClassList = classNames('form-control form-control-lg', {
    'is-invalid': error
  });
  return (
    <div className="form-group">
      <textarea{...input} className={rootClassList} placeholder={placeholder} />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextareaFieldGroup.propTypes = {
  input: PropTypes.shape().isRequired,
  info: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  meta: PropTypes.shape().isRequired,
};

export default TextareaFieldGroup;
