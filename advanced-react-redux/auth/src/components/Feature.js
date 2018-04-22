import React, { Component } from 'react'
import { connect } from 'react-redux'
import requireAuth from './RequireAuth'
import { fetchMessage } from '../actions/'

class Feature extends Component {
  componentDidMount() {
    this.props.fetchMessage()
  }
  render() {
    return (
      <div>
        <h4>Show your messages here!</h4>
        <span>Server message: {this.props.message}</span>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ message: auth.message })

export default connect(mapStateToProps, { fetchMessage })(requireAuth(Feature))