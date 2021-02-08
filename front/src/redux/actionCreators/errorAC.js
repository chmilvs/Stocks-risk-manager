import {CLEAR_ERROR, WRITE_ERROR} from "../types"

export const errorsAC = (payload) => {
    return {
        type: WRITE_ERROR,
        payload
    }
}

export const clearErrorAC = () => {
    return {
        type: CLEAR_ERROR
    }
}
