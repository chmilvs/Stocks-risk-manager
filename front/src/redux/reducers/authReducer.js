import {ADD_STOCK, SAVE_NEWUSER, USER_LOGOUT} from "../types"

const defaultState = {
    currentUser: {},
    isLogged: false
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
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
        case ADD_STOCK :
            state.currentUser.deposit -= (action.payload.price*action.payload.amountBuyed)
            state.currentUser.stocks.push(action.payload)
            return {
                ...state

            }
        default:
            return state
    }
}
export default authReducer 
