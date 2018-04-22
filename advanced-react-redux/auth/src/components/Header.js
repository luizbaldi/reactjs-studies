import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { signOut } from '../actions'

class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-light'>
        <Link to='/' className='navbar-brand'>Redux Auth</Link>
        <ul className='nav navbar-nav'>
          <li className='nav-item'>
            {this.props.isAuth
              ? <a className='nav-link' onClick={() => this.props.signOut()}>Sign out</a>
              : (
                <span>
                  <Link className='nav-link' to='/signin'>Sign in</Link>
                  <Link className='nav-link' to='/signup'>Sign up</Link>
                </span>
              )
            }
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ isAuth: auth.isAuth })

export default connect(mapStateToProps, { signOut })(Header)