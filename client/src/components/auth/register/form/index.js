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
        name="name"
        type="text"
        placeholder="Name"
        component={InputFiledGroup}
        required
      />
      <Field
        className={fieldClassName}
        name="email"
        type="email"
        placeholder="Email Address"
        component={InputFiledGroup}
        required
      />
      <Field
        className="form-control form-control-lg"
        name="password"
        type="password"
        component={InputFiledGroup}
        placeholder="Password"
      />
      <Field
        className="form-control form-control-lg"
        name="password2"
        type="password"
        component={InputFiledGroup}
        placeholder="Confirm Password"
      />
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

