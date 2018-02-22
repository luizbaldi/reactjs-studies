import firebase from 'firebase';
import { 
  EMPLOYEE_INPUT_UPDATE,
  EMPLOYEE_RESET,
  FETCH_EMPLOYEES
} from './types';
import { Actions } from 'react-native-router-flux';

export const onInputUpdate = (prop, value) => {
  return {
    type: EMPLOYEE_INPUT_UPDATE,
    payload: { prop, value }
  }
};

export const employeeCreate = (name, phone, shift) => { 
  const { currentUser } = firebase.auth();
  
  return dispatch => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_RESET })
        Actions.pop();
      })
  }
};

export const fetchEmployees = () => {
  const { currentUser } = firebase.auth();
  
  return dispatch => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: FETCH_EMPLOYEES, payload: snapshot.val() })
      })
  }
};

export const employeeUpdate = (name, phone, shift, uid) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_RESET });
        Actions.pop();
      })
  }
};

export const employeeDelete = (uid) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => Actions.pop());
  }
}