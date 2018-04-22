import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, isAuth: true, error: false }
    case UNAUTH_USER:
      return { ...state, isAuth: false, error: false }
    case AUTH_ERROR:
      return { ...state, isAuth: false, error: action.payload }
    case FETCH_MESSAGE:
      return { ...state, message: action.payload }
    default:
      return state
  }
}