import { combineReducers } from 'redux';

/* Reducers */
import auth from './authReducer';
import employeeForm from './employeeFormReducer';
import employeeList from './employeeListReducer';

export default combineReducers({
  auth, employeeForm, employeeList
});