import React, { Component } from 'react';
import Button from './Button';

class Users extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.fetchUsers();
	}
	render() {
		const { data, fetchUsers } = this.props;
		return (
			<div>
				<div>
					<Button
						onClick={fetchUsers}
						text={'Fetch Users'}
					/>
				</div>
				<div>
					{data.users.map((user, i) => {
						return (
							<div key={'user_' + i}>
								<img src={user.picture.thumbnail} width="50" height="50" />
								<span>{user.login.username}</span>
							</div>
						)
					})}
				</div>
			</div>
		);
	}
}

export default Users;