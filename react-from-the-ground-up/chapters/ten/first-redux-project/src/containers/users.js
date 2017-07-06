import { connect } from 'react-redux';
import Users from '../components/users';
import fetchUsers from '../actions/users';

const mapStateToProps = (state) => ({
	data: state
});

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => {
			dispatch(fetchUsers())
		}
	}
}

const UsersContainers = connect(
	mapStateToProps,
	mapDispatchToProps
)(Users)

export default UsersContainers;