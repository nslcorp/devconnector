import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextareaFieldGroup = ({ input, name, placeholder, value, error, info, onChange }) => (
  <div className="form-group">
      <textarea
        {...input}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
      />
    {info && <small className="form-text text-muted">{info}</small>}
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

TextareaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
};

export default TextareaFieldGroup;
