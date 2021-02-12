import {SAVE_NEWUSER, USER_LOGOUT} from "../types"
import {LOG_IN_URL, PROFILE_URL, SIGN_UP_URL, UPDATE_PROFILE_URL} from "../utils/utils"
import {clearErrorAC, errorsAC} from "./errorAC"


let token = JSON.parse(localStorage.getItem('jwt'))

export const signUpFetchAC = ({username, password, phone, email, deposit}) => (
    dispatch
) => {
    fetch(SIGN_UP_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password, phone, email, deposit})
    })
        .then((res) => res.json())
        .then((newuser) => {
            if (newuser.success) {
                localStorage.setItem("jwt", JSON.stringify(newuser.token))
                dispatch(addUser(newuser.user));
                dispatch(clearErrorAC())
            } else {
                dispatch(errorsAC(newuser.message));
            }
        });
};

export const logInFetchAC = ({username, password}) => (dispatch) => {
    fetch(LOG_IN_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password})
    })
        .then((res) => res.json())
        .then(loguser => {
            if (loguser.success) {
                localStorage.setItem("jwt", JSON.stringify(loguser.token))
                dispatch(addUser(loguser.user))
                dispatch(clearErrorAC())
            } else {
                dispatch(errorsAC(loguser.message))
            }
        })
}

export const getProfileAC = () => {
    return (dispatch) => {
        if (token) {
            fetch(PROFILE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({token: token}),
            })
                .then(res => res.json())
                .then(user => {
                    if (user.success) {
                        dispatch(addUser(user.user))
                    } else {
                        localStorage.removeItem('jwt')
                    }
                })
        }
    }
};

export const updateOneFetchAC = ({username, password, phone, email, deposit}) => (
    dispatch
) => {
  token = JSON.parse(localStorage.getItem('jwt'))
    fetch(UPDATE_PROFILE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password, phone, email, deposit,token})
    })
        .then((res) => res.json())
        .then((updatedUser) => {
            console.log(updatedUser)
            if (updatedUser.success) {
                dispatch(addUser(updatedUser.user));
                dispatch(clearErrorAC())
            } else {
                dispatch(errorsAC(updatedUser.message));
            }
        });
};

export const logOutAC = () => {
    localStorage.removeItem("jwt")
    return {
        type: USER_LOGOUT
    }

}

export const addUser = (payload) => {
    return {
        type: SAVE_NEWUSER,
        payload
    }
}

