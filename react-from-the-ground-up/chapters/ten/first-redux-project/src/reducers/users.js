const initialState = {
	users: [],
	loading: false,
	error: null
}

// Reducer
const usersReducer = (state = initialState, action) => {
	let users;

	switch (action.type) {
		case 'FETCH_USER_PENDING':
			return {
				...state,
				loading: true
			};
		case 'FETCH_USER_FULFILLED':
			users = action.payload.data.results;
			return {
				...state,
				loading: false,
				users
			};
		case 'FETCH_USER_REJECTED':
			return {
				...state,
				loading: false,
				error: `${action.payload.message}`
			};
			break;
		default:
			return state;
	}
};

export default usersReducer;