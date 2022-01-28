import initState from "../../components/InitState";
import * as actions from "../action/ActionsTypes";

function reducer(state = initState, action) {
    switch (action.type) {
        case actions.REGISTER_USER:
            return state;

        case actions.LOGIN_USER:
            return state
            // return Object.assign({} , state, {display: 1})
        case action.LOGOUT_USER:
            return state;
        
        // case action.CREATE_REQUEST:
        //     return { ...state, register };
        // case action.CREATE_FAILURE:
        //     return { ...state register.errors };

                
            default: 
            return state;
    }
}

export default reducer;