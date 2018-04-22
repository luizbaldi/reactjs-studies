import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { signUp } from '../../actions'

class SignUp extends Component {
  handleFormSubmit = ({ email, password }) => {
    this.props.signUp({ email, password })
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
    const { handleSubmit, error, fields: { email, password, passwordConfirm }} = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className='form-group'>
          <label htmlFor="email">Email:</label>
          <input type="text" className='form-control' {...email} />
          {email.touched && !!email.error && <p className='error'>{email.error}</p>}
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor="email">Password:</label>
          <input type="text" className='form-control' {...password} type='password' />
          {password.touched && !!password.error && <p className='error'>{password.error}</p>}
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor="email">Confirm password:</label>
          <input type="text" className='form-control' {...passwordConfirm} type='password' />
          {passwordConfirm.touched && !!passwordConfirm.error && <p className='error'>{passwordConfirm.error}</p>}
        </fieldset>
        {this.renderError()}
        <button action='submit' className='btn btn-primary'>Sign Up</button>
      </form>
    )
  }
}

const validate = (props) => {
  const errors = {}
  const { password, passwordConfirm, email } = props

  if (!email) {
    errors.email = 'Please enter an email'
  }

  if (!password) {
    errors.password = 'Please enter a password'
  }

  if (!passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation'
  }

  if (password !== passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match'
  }

  return errors
}

const mapStateToProps = ({ auth }) => ({ auth })

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, { signUp })(SignUp)