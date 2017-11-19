import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          <span>{touched ? error : ''}</span>
        </div>
      </div>
    );
  }
  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }
  render() {
    const fields = [
      { label: 'Title', name: 'title' },
      { label: 'Categories', name: 'categories' },
      { label: 'Post content', name: 'content' }
    ];

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        {fields.map(field => (
          <Field
            key={field.name}
            label={field.label}
            name={field.name}
            component={this.renderField}
          />
        ))}
        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
};

const validateForm = (values) => {
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that\'s at least 3 characters!';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
  }

  return errors;
}

export default reduxForm({ 
  form: 'NewPosts',
  validate: validateForm
})(connect(null, { createPost })(PostsNew));