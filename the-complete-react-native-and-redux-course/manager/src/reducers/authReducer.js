import { 
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  SET_USER,
  SET_LOADING,
  SET_ERROR_MESSAGE
} from '../actions/types';

const initialState = { 
  email: '',
  password: '',
  user: {},
  loading: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload, error: '' };
    case SET_ERROR_MESSAGE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};