import { FETCH_USERS } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload]
    default:
      return state
  }
}