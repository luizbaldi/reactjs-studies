import { combineReducers } from 'redux';

/* Reducers */
import auth from './authReducer';
import employeeForm from './employeeFormReducer';

export default combineReducers({
  auth, employeeForm
});