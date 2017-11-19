import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      const { data } = action.payload;
      return { ...state, [data.id]: data };
    default:
      return state;
  }
};