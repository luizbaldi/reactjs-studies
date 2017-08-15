import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import selectUser from '../actions';

class UserList extends Component {
    loadListItems() {
        return this.props.users.map(user => (
            <li 
                key={user.id}
                onClick={() => this.props.selectUser(user)}
            >
                {user.first} {user.last}
            </li>
        ));
    }
    render() {
        return (
            <div>
                <ul>
                    {this.loadListItems()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapToDispatchProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch);    
}

export default connect(mapStateToProps, mapToDispatchProps)(UserList);