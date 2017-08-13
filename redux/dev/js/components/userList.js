import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserList extends Component {
    loadListItems() {
        return this.props.users.map(user => (
            <li key={user.id}>
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

function mapStateToProps (state) {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(UserList);