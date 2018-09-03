import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, className, placeholder, type, meta: { touched, error } }) => (
  <div className="form-group">
    <input className={className} {...input} placeholder={placeholder} type={type} />
    {touched && error && <div className={error ? "is-invalid" : ""}>{error}</div>}
  </div>
);

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
        component={renderField}
        required
      />
      <Field
        className={fieldClassName}
        name="password"
        type="password"
        placeholder="Password"
        component={renderField}
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

