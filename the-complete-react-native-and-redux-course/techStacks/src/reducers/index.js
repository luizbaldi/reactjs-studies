import { combineReducers } from 'redux';

/* Reducers */
import libraries from './library';
import selectedLibrary from './selectedLibrary';

export default combineReducers({ libraries, selectedLibrary });

