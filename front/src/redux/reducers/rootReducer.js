import {combineReducers} from 'redux';
import authReducer from './authReducer'
import stockReducer from './stockReducer'
import errorMessageReducer from './errorMessageReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    stock: stockReducer,
    errors: errorMessageReducer
})

export default rootReducer
