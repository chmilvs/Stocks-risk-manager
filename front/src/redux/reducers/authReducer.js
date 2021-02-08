import { SAVE_NEWUSER, USER_LOGOUT } from "../types"

const defaultState = {
  currentUser: {},
  isLogged: false
}

const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SAVE_NEWUSER: 
    return {
      ...state,
      isLogged: true,
      currentUser: action.payload
    }
    case USER_LOGOUT:
      return {
        ...state,
        isLogged: false,
        currentUser: {}
      }
    default:
      return state
  }
}
export default authReducer 
