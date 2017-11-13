import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render() {
        return (
            <div>
                {this.props.user ?
                    <div>Selected user: {this.props.user.first}</div>
                    : <div>Select an user...</div>
                }
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);