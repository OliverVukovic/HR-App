import initState from "../../components/InitState";
import * as actions from "../action/ActionsTypes";

function reducer(state = initState, action) {
    switch (action.type) {
        case actions.REGISTER_USER :
            return state;
        case actions.LOGIN_USER :
            return state
            // return Object.assign({} , state, {display: 1})
        default : 
            return state;
    }
}

export default reducer;