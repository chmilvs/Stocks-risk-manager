import { CLEAR_ERROR, WRITE_ERROR } from "../types"

const defaultState = {
  isError: false,
  text: ''
}

const errorMessageReducer = (state = defaultState, action) => {
  switch(action.type) {
    case WRITE_ERROR: 
      return {
        ...state,
        isError: true,
        text: action.payload
      }
      case CLEAR_ERROR:
        return {
          ...state,
          isError: false,
          text: ''
        }
    default:
      return state
  }
}

export default errorMessageReducer
