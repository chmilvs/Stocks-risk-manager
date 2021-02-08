import { SAVE_NEWUSER } from "../types"

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
    default:
      return state
  }
}
export default authReducer 
