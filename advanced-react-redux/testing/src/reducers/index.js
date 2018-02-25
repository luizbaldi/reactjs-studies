import { combineReducers } from 'redux'

/* Reducers */
import comments from './commentsReducer'

const rootReducer = combineReducers({ comments })

export default rootReducer
