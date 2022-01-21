import { takeEvery } from "redux-saga/effects";
import Register from "../components/Register";
import * as ActionsTypes from "../redux/action/ActionsTypes";

export function* register(action) {
    const {
        userName,
        email,
        password
    } = action.payload 
    try {
        // pokrenuti loading... (koristiti PUT)
        // call ka backendu gde se salju podaci (call , )
        // sacuvati token i userId u localStorage (ako je bezuspesno, error)
        // kreirati company i uploadovati img (ukoliko podaci postoje)
        // ako imamo i usera i company i img onda se kreira profil (yield call)
        // prekinuti loading... (koristiti PUT)
        // redirekcija korisnika (uz pomoc react routera)
    } catch(error) {

    }
};


export default function* root() {
    yield takeEvery(
        ActionsTypes.REGISTER_USER,
        register
    )
}