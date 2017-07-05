import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import usersReducer from './reducers/users';

const store = createStore(
	usersReducer,
	applyMiddleware(
		createLogger(),
		promise()
	)
);

export default store;