import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputFieldGroup } from '../../../../shared/form-fields';

const RegisterForm = ({ error, handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field name="name" type="text" placeholder="Name" component={InputFieldGroup} />
    <Field name="email" type="email" placeholder="Email Address" component={InputFieldGroup} />
    <Field name="password" type="password" placeholder="Password" component={InputFieldGroup} />
    <Field name="password2" type="password" placeholder="Confirm Password" component={InputFieldGroup} />
    {error && <strong>{error}</strong>}
    <button className="btn btn-info btn-block mt-4" type="submit" disabled={submitting}>
      Submit
    </button>
  </form>
);

export default reduxForm({
  form: 'register'
})(RegisterForm);

