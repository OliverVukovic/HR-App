import * as ActionTypes from "./ActionsTypes"

export const registerUser = (user) => {
    console.log(user)
    return {
        type: ActionTypes.REGISTER_USER,
        payload: user
    }
}

export const loginUser = () => {
    return {
        type: ActionTypes.LOGIN_USER,
    }
}