import { WRITE_ERROR } from "../types"

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
    default:
      return state
  }
}

export default errorMessageReducer
