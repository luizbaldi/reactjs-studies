import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'
import { auth } from '../actions'

class Header extends Component {
  renderAuthButton () {
    const { authenticated, auth } = this.props
    let component

    if (authenticated) {
      component = <button onClick={() => auth(false)}>Sign Out</button>
    } else {
      component = <button onClick={() => auth(true)}>Sign In</button>
    }

    return component
  }

  render () {
    return (
      <nav className='navbar navbar-light'>
        <ul className='nav navbar-nav'>
          <li className='nav-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/resources'>Resources</Link>
          </li>
          <li className='nav-item'>
            {this.renderAuthButton()}
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = ({ authenticated }) => ({ authenticated })

export default connect(mapStateToProps, { auth })(Header)
