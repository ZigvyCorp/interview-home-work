import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostForm extends React.Component {
  renderInput = ({ input, label }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control" {...input} autoComplete="off" required />
      </div>
    );
  };

  renderTextarea = ({ input, label }) => {
    return (
      <div className="form-group is-valid">
        <label>{label}</label>
        <textarea className="form-control" {...input} required />
      </div>
    );
  }

  onSubmit = formValues => {

    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form className="create-post-form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Title"></Field>
        <Field name="tags" component={this.renderInput} label="Tags"></Field>
        <Field name="content" component={this.renderTextarea} label="Content"></Field>
        <button type="submit" className="btn btn-success">Create</button>
      </form>
    )
  }

}

export default reduxForm({
  form: 'postForm'
})(PostForm);
