import { WRITE_ERROR } from "../types"

export const errorsAC = (payload) => {
  return {
    type: WRITE_ERROR,
    payload
  }
}
