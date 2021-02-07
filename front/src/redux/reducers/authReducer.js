import { SAVE_NEWUSER } from "../types"

const defaultState = {
  currentUser: {}
}

const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SAVE_NEWUSER: 
    return {
      ...state,
      currentUser: action.payload
    }
    default:
      return state
  }
}
export default authReducer 
