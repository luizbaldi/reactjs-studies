import { combineReducers } from 'redux';

/* Reducers */
import users from './usersReducer'

const rootReducer = combineReducers({
  users
});

export default rootReducer;
