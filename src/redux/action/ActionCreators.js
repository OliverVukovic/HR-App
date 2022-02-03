import * as ActionTypes from "./ActionsTypes"


// REGISTER
export const registerUser = (user) => {
    // console.log(user)
    return {
        type: ActionTypes.REGISTER_USER,
        payload: user
    }
}
export const registerUserSuccess = (user) => {
    return {
        type: ActionTypes.REGISTER_USER_SUCCESS,
        payload: user
    }
}
export const registerUserFailure = (user) => {
    return {
        type: ActionTypes.REGISTER_USER_FAILURE,
        payload: user
    }
}


// LOGIN
export const loginUser = (payload) => {
    return {
        type: ActionTypes.LOGIN_USER,
        payload 
    }
}
export const loginUserSuccess = (payload) => {
    return {
        type: ActionTypes.LOGIN_USER_SUCCESS,
        payload 
    }
}
export const loginUserFailure = (payload) => {
    return {
        type: ActionTypes.LOGIN_USER_FAILURE,
        payload 
    }
}


// LOGOUT
export const logoutUser = () => {
    return {
        type: ActionTypes.LOGOUT_USER,
    }
}
export const logoutUserSuccess = () => {
    return {
        type: ActionTypes.LOGOUT_USER_SUCCESS,
    }
}
export const logoutUserFailure = () => {
    return {
        type: ActionTypes.LOGOUT_USER_FAILURE,
    }
}




// CREATE PROFILE
export const createProfile = (payload) => {
    return {
        type: ActionTypes.CREATE_PROFILE,
        payload
    }
}
export const createProfileSuccess = (payload) => {
    return {
        type: ActionTypes.CREATE_PROFILE_SUCCESS,
        payload
    }
}
export const createProfileFailure = (payload) => {
    return {
        type: ActionTypes.CREATE_PROFILE_FAILURE,
        payload
    }
}




// CREATE COMPANY
export const createCompany = (payload) => {
    return {
        type: ActionTypes.CREATE_COMPANY,
        payload
    }
}
export const createCompanySuccess = (payload) => {
    return {
        type: ActionTypes.CREATE_COMPANY_SUCCESS,
        payload
    }
}
export const createCompanyFailure = (payload) => {
    return {
        type: ActionTypes.CREATE_COMPANY_FAILURE,
        payload
    }
}


// FETCH COMPANY
export const fetchCompany = () => {
    return {
        type: ActionTypes.FETCH_COMPANY,
    }
}
export const fetchCompanySuccess = (payload) => {
    return {
        type: ActionTypes.FETCH_COMPANY_SUCCESS,
        payload
    }
}
export const fetchCompanyFailure = (payload) => {
    return {
        type: ActionTypes.FETCH_COMPANY_FAILURE,
        payload
    }
}



// PHOTO
export const uploadPhoto = (payload) => {
    return {
        type: ActionTypes.UPLOAD_PHOTO,
        payload
    }
}
export const uploadPhotoSuccess = (payload) => {
    return {
        type: ActionTypes.UPLOAD_PHOTO_SUCCESS,
        payload
    }
}
export const uploadPhotoFailure = (payload) => {
    return {
        type: ActionTypes.UPLOAD_PHOTO_SUCCESS,
        payload
    }
}
