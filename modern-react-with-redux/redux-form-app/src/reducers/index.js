import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
