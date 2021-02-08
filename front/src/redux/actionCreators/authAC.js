import { SAVE_NEWUSER } from "../types"
import { SIGN_UP_URL } from "../utils/utils"
import { errorsAC } from "./errorAC"

export const signUpFetchAC = ({ username, password, phone, email }) => (
  dispatch
) => {
  fetch(SIGN_UP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, phone, email }),
  })
    .then((res) => res.json())
    .then((newuser) => {
      if (newuser.success) {
        localStorage.setItem("jwt", JSON.stringify(newuser.token));
        dispatch(addUser(newuser.user));
      } else {
        dispatch(errorsAC(newuser.message));
      }
    });
};

export const addUser = (payload) => {
  return {
  type: SAVE_NEWUSER,
  payload
  }
}
