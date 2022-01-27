import * as ActionTypes from "./ActionsTypes"

export const registerUser = (user) => {
    console.log(user)
        // api.user.register(data)
        // .then(user => {
        //     localStorage.bookwormJWT = user.token;
        //     dispatch(loginUser());
        // });
    return {
        type: ActionTypes.REGISTER_USER,
        payload: user
    }
}

export const loginUser = (payload) => {
    return {
        type: ActionTypes.LOGIN_USER,
        payload 
    }
}

export const logoutUser = () => {
    return {
        type: ActionTypes.LOGOUT_USER,
    }
}

// 


// export const login = (credential) => dispatch => {
//     localStorage.bookwormJWT = credential.token;
//     setAuth(credential.token)
//     dispatch(loginUser(credential))
// }

// export const logout = () => dispatch => {
//     localStorage.removeItem("bookwormJWT");
//     setAuth();
//     dispatch(loginUser());
// }


// export const confirm = (token) => dispatch => 
//     api.user.confirm(token)
//     .then(user => {
//         localStorage.bookwormJWT = user.token;
//         dispatch(loginUser);
// });

// export const resetPassRequest = ({email}) => () =>
//     api.user.resetPassRequest(email);

// export const validateToken = (token) =>
//     api.user.validateToken(token);

// export const ressetPassword = (data) => () =>
//     api.user.ressetPassword(data);



export const createRequest = (user) => ({
    type: ActionTypes.CREATE_REQUEST,
    user
});

export const createFailure = (errors) => ({
    type: ActionTypes.CREATE_FAILURE,
    payload: {},
    errors
});

export const fetchRequest = () => ({
    type: ActionTypes.FETCH_REQUEST
});

export const fetchSuccess = (user) => ({
    type: ActionTypes.FETCH_SUCCESS,
    user
});