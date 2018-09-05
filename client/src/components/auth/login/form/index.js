import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {InputFieldGroup} from '../../../../shared/form-fields/';


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
        component={InputFieldGroup}
        required
      />
      <Field
        className={fieldClassName}
        name="password"
        type="password"
        placeholder="Password"
        component={InputFieldGroup}
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

