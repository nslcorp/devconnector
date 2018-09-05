import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputFieldGroup } from '../../../../shared/form-fields/';


const RegisterForm = ({ error, handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="email"
      type="email"
      placeholder="Email Address"
      component={InputFieldGroup}
      required
    />
    <Field
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

export default reduxForm({
  form: 'login'
})(RegisterForm);

