import React, { Component } from 'react'

/* Redux */
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users } = this.props
    return (
      <div className='user-list'>
        {users.map(user => (
          <div className='card card-block' key={user.id}>
            <h4 className='card-title'>{user.name}</h4>
            <p className='card-text'>{user.company.name}</p>
            <a href={user.website} target='_blank' className='btn btn-primary'>Website</a>
          </div>
        ))}
      </div>
    )
  }
} 

const mapStateToProps = ({ users }) => ({ users })

export default connect(mapStateToProps, { fetchUsers })(UserList)