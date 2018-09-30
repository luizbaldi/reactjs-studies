import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'

/* Simple toggle button made using render props */
class Toggle extends Component {

  static propTypes = {
    render: propTypes.node.isRequired
  }

  state = {
    isOn: false
  }

  onToggle = () => this.setState({ isOn: !this.state.isOn })

  render () {
    const { isOn } = this.state
    const { render } = this.props

    return (
      <Fragment>
        {render(isOn, this.onToggle)}
      </Fragment>
    )
  }

}

export default Toggle