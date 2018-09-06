import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const SelectFieldGroup = ({ input, info, options, meta: { touched, error } }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  const rootClassList = classNames('form-control form-control-lg', {
    'is-invalid': error
  });

  return (
    <div className="form-group">
      <select {...input} className={rootClassList} >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectFieldGroup.propTypes = {
  input: PropTypes.shape().isRequired,
  info: PropTypes.string,
  options: PropTypes.array.isRequired,
  meta: PropTypes.shape().isRequired,
};

export default SelectFieldGroup;
