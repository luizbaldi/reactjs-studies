import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import ActiveBookReducer from './ActiveBookReducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
