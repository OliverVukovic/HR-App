import initState from "./InitState";
import * as actions from "../action/ActionsTypes";

function reducer(state = initState, action) {
    switch (action.type) {

        case actions.REGISTER_USER:
            return state;
        case actions.REGISTER_USER_SUCCESS:
            return {...state, user: action.payload}
        case actions.REGISTER_USER_FAILURE:
            return {...state, error: action.payload}



        case actions.LOGIN_USER:
            return state
        case actions.LOGIN_USER_SUCCESS:
            return {...state, user: action.payload}
        case actions.LOGIN_USER_FAILURE:
            return {...state, error: action.payload}
            

        
        case actions.LOGOUT_USER:
            // console.log(action.type)
            const initUser = {
                username: '',
                email: '',
                password: '',
                role: '',
                company: '',
                profilePhoto: '',
                id: '',
                isAutenticated: false
            }
            return { ...state, user: initUser} ;
        case actions.LOGOUT_USER_SUCCESS:
            return {...state, user: action.payload}
        case actions.LOGOUT_USER_FAILURE:
            return {...state, error: action.payload}



        case actions.UPLOAD_PHOTO:
            return {
                ...state,
                isLoading: true,
            }
        case actions.UPLOAD_PHOTO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                // image: payload
            }
        case actions.UPLOAD_PHOTO_FAILURE:
            return {
                ...state,
                isLoading: false,
                // error: payload,
            }   



        case actions.FETCH_PROFILE_RESPONSE:
            console.log("RESPONSE radi!");
			return { 
                ...state, 
                ...action.payload 
            };

        case action.CREATE_PROFILE:
            console.log('REDUCER CREATE PROFILESSSS')
            return {
                ...state,
                ...action.payload
            }

        
        default: 
        return state;
    }
}

export default reducer;