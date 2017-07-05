import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/user';

const store = createStore(
	userReducer,
	applyMiddleware(
		logger(),
		promise()
	)
);

export default store;