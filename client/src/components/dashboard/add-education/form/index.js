import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputFieldGroup } from '../../../../shared/form-fields';

const AddEducationForm = ({ error, handleSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="school" placeholder="* School" component={InputFieldGroup} />
      <Field name="degree" placeholder="* Degree or Certification" component={InputFieldGroup} />
      <Field name="fieldofstudy" placeholder="* Field of Study" component={InputFieldGroup} />
      <h6>From Date</h6>
      <Field name="from" type="date" component={InputFieldGroup} />
      <h6>To Date</h6>
      <Field name="to" type="date" component={InputFieldGroup} />
      <div className="form-check mb-4">
        <input
          type="checkbox"
          className="form-check-input"
          name="current"
          id="current"
        />
        <label htmlFor="current" className="form-check-label">
          Current Job
        </label>
      </div>
      <Field
        name="description"
        placeholder="Program Description"
        info="Tell us about the program that you were in"
        component={InputFieldGroup}
      />
      <button className="btn btn-info btn-block mt-4" type="submit" disabled={submitting}>Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'add-education'
})(AddEducationForm);
