import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  SET_USER,
  SET_LOADING,
  SET_ERROR_MESSAGE
} from './types';

/* Action Creators */
export const emailChange = value => ({
  type: EMAIL_CHANGE,
  payload: value
});

export const passwordChange = value => ({
  type: PASSWORD_CHANGE,
  payload: value
});

export const loginUser = (email, password) => {
  return dispatch => {
    dispatch(setLoading(true));
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => onLoginSuccess(dispatch, user))
      .catch(err => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => onLoginSuccess(dispatch, user))
          .catch(err => onLoginFail(dispatch, err.message))
      });
  }
}

const setLoading = isLoading => ({
  type: SET_LOADING,
  payload: isLoading
});

const onLoginSuccess = (dispatch, user) => {
  dispatch(setLoading(false));
  dispatch({ type: SET_USER, payload: user });
  Actions.main();
};

const onLoginFail = (dispatch, message) => {
  dispatch(setLoading(false))
  dispatch({ type: SET_ERROR_MESSAGE, payload: message });
};