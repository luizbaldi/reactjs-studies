import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types'

const API_URL = 'http://localhost:3090'

const signIn = ({ email, password }) => dispatch => {
  axios.post(`${API_URL}/signin`, { email, password })
    .then(({ data }) => onSucessSign(data.token, dispatch))
    .catch(err => {
      dispatch(authError('Check your login info...'))
    })
}

const signUp = ({ email, password }) => dispatch => {
  axios.post(`${API_URL}/signup`, { email, password })
    .then(({ data }) => onSucessSign(data.token, dispatch))
    .catch(({ response: data }) => {
      dispatch(authError(data.data.error))
    })
}

const onSucessSign = (token, dispatch) => {
  dispatch({ type: AUTH_USER })
  localStorage.setItem('auth-course-token', token)
  browserHistory.push('/feature')
}

const authError = errorMsg => ({
  type: AUTH_ERROR,
  payload: errorMsg
})

const signOut = () => {
  localStorage.removeItem('auth-course-token')
  browserHistory.push('/')
  return { type: UNAUTH_USER }
}

const fetchMessage = () => dispatch => {
  const config = {
    headers: { authorization: localStorage.getItem('auth-course-token') }
  }
  axios.get(API_URL, config).then(({ data }) => {
    dispatch({
      type: FETCH_MESSAGE,
      payload: data.message
    })
  })
}

export { signIn, signOut, signUp, fetchMessage }