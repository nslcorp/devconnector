import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const SelectFieldGroup = ({ name, value, error, info, onChange, options }) => {
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
      <select className={rootClassList} name={name}>
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.array.isRequired
};

export default SelectFieldGroup;
