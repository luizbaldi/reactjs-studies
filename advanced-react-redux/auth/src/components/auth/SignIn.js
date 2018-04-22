import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { signIn } from '../../actions'

class SignIn extends Component {
  handleFormSubmit = ({ email, password }) => {
    this.props.signIn({ email, password })
  }

  renderError = () => {
    return !!this.props.auth.error && (
      <div className='alert alert-danger'>
        <strong>Ops! </strong>
        <span>{this.props.auth.error}</span>
      </div>
    )
  }

  render() {
    const { handleSubmit, auth, fields:{ email, password }} = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input {...email} type="text" className='form-control' />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input {...password} type="password" className='form-control' />
        </fieldset>
        {this.renderError()}
        <button action='submit' className='btn btn-primary'>Sign in</button>
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, { signIn })(SignIn)