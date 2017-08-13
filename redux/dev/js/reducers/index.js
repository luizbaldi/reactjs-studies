import { combineReducers } from 'redux';
import userReducer from './userReducer';

const allReducers = combineReducers({
    users: userReducer
});

export default allReducers;