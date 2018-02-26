import { combineReducers } from 'redux'

// Reducers
import authenticated from './authenticationReducer'

const rootReducer = combineReducers({
  authenticated
})

export default rootReducer
