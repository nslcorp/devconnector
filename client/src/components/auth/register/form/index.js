import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {InputFieldGroup} from '../../../../shared/form-fields';

const RegisterForm = (props) => {
  const { error, handleSubmit, submitting } = props;
  const classList = "form-control form-control-lg";
  return (
    <form onSubmit={handleSubmit}>
      <Field className={classList} name="name" type="text" placeholder="Name" component={InputFieldGroup} />
      <Field className={classList} name="email" type="email" placeholder="Email Address" component={InputFieldGroup} />
      <Field className={classList} name="password" type="password" placeholder="Password" component={InputFieldGroup} />
      <Field className={classList} name="password2" type="password" placeholder="Confirm Password" component={InputFieldGroup} />
      {error && <strong>{error}</strong>}
      <button className="btn btn-info btn-block mt-4" type="submit" disabled={submitting}>
        Submit
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'register'
})(RegisterForm);

