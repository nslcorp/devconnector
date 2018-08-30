import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, className, placeholder, type, meta: { touched, error } }) => (
  <div className="form-group">
    <input className={className} {...input} placeholder={placeholder} type={type} />
    {touched && error && <span>{error}</span>}
  </div>
);

const RegisterForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  const fieldClassName = "form-control form-control-lg";
  return (
    <form onSubmit={handleSubmit}>

      <Field
        className={fieldClassName}
        name="name"
        type="text"
        placeholder="Name"
        component={renderField}
        required
      />
      <Field
        className={fieldClassName}
        name="email"
        type="email"
        placeholder="Email Address"
        component={renderField}
        required
      />
      <Field
        className="form-control form-control-lg"
        name="password"
        type="password"
        component={renderField}
        placeholder="Password"
      />
      <Field
        className="form-control form-control-lg"
        name="password2"
        type="password"
        component={renderField}
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

