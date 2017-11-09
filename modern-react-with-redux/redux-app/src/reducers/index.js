import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
