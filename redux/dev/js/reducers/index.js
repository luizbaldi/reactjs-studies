import { combineReducers } from 'redux';
import userReducer from './userReducer';
import activeUserReducer from './activeUserReducer';

const allReducers = combineReducers({
    users: userReducer,
    activeUser: activeUserReducer
});

export default allReducers;