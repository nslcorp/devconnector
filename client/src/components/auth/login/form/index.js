import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputFiledGroup from '../../../../shared/input-field-group';


const RegisterForm = (props) => {
  const { error, handleSubmit, submitting } = props;
  const fieldClassName = "form-control form-control-lg";
  return (
    <form onSubmit={handleSubmit}>
      <Field
        className={fieldClassName}
        name="email"
        type="email"
        placeholder="Email Address"
        component={InputFiledGroup}
        required
      />
      <Field
        className={fieldClassName}
        name="password"
        type="password"
        placeholder="Password"
        component={InputFiledGroup}
        required
      />
      {error && <strong>{error}</strong>}
      <button className="btn btn-info btn-block mt-4" type="submit" disabled={submitting}>
        Submit
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'login'
})(RegisterForm);

