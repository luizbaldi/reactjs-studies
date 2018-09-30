import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'

/* Simple toggle button made using function as children */
class AnotherToggle extends Component {

  static propTypes = {
    render: propTypes.node.isRequired
  }

  state = {
    isOn: false
  }

  onToggle = () => this.setState({ isOn: !this.state.isOn })

  render () {
    const { isOn } = this.state
    const { children } = this.props

    return children(isOn, this.onToggle)
  }

}

export default AnotherToggle