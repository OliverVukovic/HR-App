import { takeEvery, call, put } from "redux-saga/effects";
import * as ActionsTypes from "../redux/action/ActionsTypes";
import * as authApi from "../services/api/authApi";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate()

// const logOutNavigate = () => {
//     const navigate = useNavigate()
//     navigate("/")
// }

export function* register(action) {
    const {
        username,
        email,
        password,
    } = action.payload 
        try {
            const response = yield call(
                authApi.register, {
                    username,
                    email,
                    password
                });
                console.log(action)
                let token = response.jwt != null ? response.jwt : null;
                console.log(response)
            // pokrenuti loading... (koristiti PUT)
            // call ka backendu gde se salju podaci (call , )
            // sacuvati token i userId u localStorage (ako je bezuspesno, error)
            // kreirati company i uploadovati img (ukoliko podaci postoje)
            // ako imamo i usera i company i img onda se kreira profil (yield call)
            // prekinuti loading... (koristiti PUT)
            // redirekcija korisnika (uz pomoc react routera)
    /*         throw 'There is an error I want to make' */
        } catch(error) {
            // console.log(error)
            // yield put({
            //     type: ActionsTypes.REGISTER_USER_FAILURE,
            //     payload: {message: "Check Your data!"}
            // })
        }
};


export function* login(action) {
    // console.log(action)
    // const navigate = useNavigate()
    const {
        email,
        password
    } = action.payload
    try {
        const response = yield call(
            authApi.login, {
                email, 
                password
            }
        ) 
    let token = response.jwt != null ? response.jwt : null;
    if (token) {
        yield put({type: ActionsTypes.LOGIN_USER_SUCCESS, payload: response.user})
        // logOutNavigate();

    }
    } catch(error) {
        yield put({type: ActionsTypes.LOGIN_USER_FAILURE, payload: {message: 'Check Your E-mail and Password'}})
    }
} 

// export function* logout(action) {
    
// }



export function* uploadPhoto(action) {
    const {} = action.image
    try {
        const response = yield call(
            authApi.uploadPhoto, {
            }
        ) 
        console.log(response)
    } catch(error) {
        console.log(error)
    }
} 
export default function* root() {
    yield takeEvery(
        ActionsTypes.REGISTER_USER,
        register
    );

    yield takeEvery(
        ActionsTypes.LOGIN_USER,
        login
    );

    yield takeEvery(
        ActionsTypes.UPLOAD_PHOTO,
        uploadPhoto
    );

}

