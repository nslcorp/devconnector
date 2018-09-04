import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputFiledGroup from '../../../../shared/input-field-group';

const RegisterForm = (props) => {
  const { error, handleSubmit, submitting } = props;
  const classList = "form-control form-control-lg";
  return (
    <form onSubmit={handleSubmit}>
      <Field className={classList} name="name" type="text" placeholder="Name" component={InputFiledGroup} />
      <Field className={classList} name="email" type="email" placeholder="Email Address" component={InputFiledGroup} />
      <Field className={classList} name="password" type="password" placeholder="Password" component={InputFiledGroup} />
      <Field className={classList} name="password2" type="password" placeholder="Confirm Password" component={InputFiledGroup} />
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

