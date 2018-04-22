import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

export default (ComposedComponent) => {
  class Auth extends Component {
    componentWillMount () {
      if (!this.props.authenticated) {
        browserHistory.push('/')
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }
  const mapStateToProps = ({ auth }) => ({ authenticated: auth.isAuth })
  return connect(mapStateToProps)(Auth)
}
