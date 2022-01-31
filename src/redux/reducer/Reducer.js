import initState from "../../components/InitState";
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
            
        
        case action.LOGOUT_USER:
            return state;
            case actions.LOGOUT_USER_SUCCESS:
                return {...state, user: action.payload}
            case actions.LOGOUT_USER_FAILURE:
                return {...state, error: action.payload}
        
            default: 
            return state;
    }
}

export default reducer;



