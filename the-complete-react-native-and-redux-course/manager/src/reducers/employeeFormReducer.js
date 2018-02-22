import { 
  EMPLOYEE_INPUT_UPDATE,
  EMPLOYEE_RESET
} from '../actions/types';

const initialState = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_INPUT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_RESET:
      return initialState;
    default:
      return state;
  }
}