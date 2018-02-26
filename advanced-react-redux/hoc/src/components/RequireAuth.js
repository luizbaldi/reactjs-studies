import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default (ComposedComponent) => {
  class Auth extends Component {
    static contextTypes = {
      router: PropTypes.object
    }
    componentWillMount () {
      if (!this.props.authenticated) {
        this.context.router.history.push('/')
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }
  const mapStateToProps = ({ authenticated }) => ({ authenticated })
  return connect(mapStateToProps)(Auth)
}
