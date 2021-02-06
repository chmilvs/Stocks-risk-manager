import { combineReducer } from 'redux';
import authReducer from './authReducer'
import stockReducer from './stockReducer'

const rootReducer = combineReducer({
  auth: authReducer,
  stock: stockReducer
})

export default rootReducer
