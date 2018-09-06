import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputFieldGroup, SelectFieldGroup, TextareaFieldGroup } from '../../../../shared/form-fields';

const statusOptions = [
  { label: '* Select Professional Status', value: 0 },
  { label: 'Developer', value: 'Developer' },
  { label: 'Junior Developer', value: 'Junior Developer' },
  { label: 'Senior Developer', value: 'Senior Developer' },
  { label: 'Manager', value: 'Manager' },
  { label: 'Student or Learning', value: 'Student or Learning' },
  { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
  { label: 'Intern', value: 'Intern' },
  { label: 'Other', value: 'Other' }
];

const Form = ({ error, handleSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="handle" placeholder="* Profile Handle" component={InputFieldGroup} required />
      <Field name="status" placeholder="Status"  component={SelectFieldGroup} options={statusOptions} />
      <Field name="company" placeholder="Company" component={InputFieldGroup} />
      <Field name="website" placeholder="Website" component={InputFieldGroup} />
      <Field name="location" placeholder="Location" component={InputFieldGroup} />
      <Field name="skills" placeholder="Skills" component={InputFieldGroup} />
      <Field name="githubusername" placeholder="Github Username" component={InputFieldGroup} />
      <Field name="bio" placeholder="Select Bio" component={TextareaFieldGroup} />

      <button className="btn btn-info btn-block mt-4" type="submit" disabled={submitting}>
        Submit
      </button>
    </form>
  );
};

Form.propTypes = {};

export default reduxForm({
  form: 'create-profile'
})(Form);
