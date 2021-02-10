import {combineReducers} from 'redux';
import authReducer from './authReducer'
import errorMessageReducer from './errorMessageReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorMessageReducer
})

export default rootReducer
