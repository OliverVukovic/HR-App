// import { Navigate, useNavigate } from "react-router-dom";
import { takeEvery, call, put } from "redux-saga/effects";
// import { uploadPhotoFailure, uploadPhotoSuccess } from "../redux/action/ActionCreators";
import * as ActionsTypes from "../redux/action/ActionsTypes";
import * as authApi from "../services/api/authApi";



export function* register(action) {

    
    const {
        username,
        email,
        password,
        photo,
        role
    } = action.payload 
        try {
            // console.log(photo)
            const response = yield call(
                authApi.register, {
                    username,
                    email,
                    password
                });

                console.log(action)
                
                let token = response.jwt != null ? response.jwt : null;
                // console.log(response)
                if (token) 
                {
                    yield put({type: ActionsTypes.REGISTER_USER_SUCCESS, payload: response.user})
                    let photoId = null;
                    if (photo != null) {
                        const img = yield call(authApi.uploadPhoto, photo);
                        // console.log(img)
                        photoId = img.payload[0].id;
                        // console.log(photoId)
                    }
                }
                                                                                                            
                                                                                                        // pokrenuti loading... (koristiti PUT)
                                                                                                        // call ka backendu gde se salju podaci (call , )
                                                                                                        // sacuvati token i userId u localStorage (ako je bezuspesno, error)
                                                                                                        // kreirati company i uploadovati img (ukoliko podaci postoje)
                                                                                                        // ako imamo i usera i company i img onda se kreira profil (yield call)
                                                                                                        // prekinuti loading... (koristiti PUT)
                                                                                                        // redirekcija korisnika (uz pomoc react routera)
                                                                                                        /* throw 'There is an error I want to make' */
        } catch(error) {
            // yield put({
            //     type: ActionsTypes.REGISTER_USER_FAILURE,
            //     payload: {message: "Check Your data!"}
            // })
        }
};


export function* login(action) {
    // console.log(action)
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
        console.log(response)
            if (token) {
                yield put({
                    type: ActionsTypes.LOGIN_USER_SUCCESS, 
                    payload: response.user
            })
        }} catch(error) {
        // console.log(error)
                yield put({
                    type: ActionsTypes.LOGIN_USER_FAILURE,
                    payload: {message: "Check Your email and password!"}
                })
    }}




// export function* logout() {
	
//     console.log('Uradi Logout!');
//         localStorage.removeItem('token');
//         // redirect
// }


// export function* uploadPhoto(payload) {     ---------------  zakomentarisi
//     // console.log(action)
    
//     try {
//         const photo = payload;
//         const response = yield call(
//             authApi.uploadPhoto, 
//             photo
//         ) 
//         console.log(response)
//         if (response) {
//             const {
//                 id,
//                 ...payloadData
//             } = response.data[0]
//             const payload = {
//                 id: id,
//                 attributes: payloadData
//             }
//             yield put(uploadPhotoSuccess(payload))
//         } else {
//             yield put(uploadPhotoFailure("Upload Failed!"))
//         }
//     } catch(error) {
//         console.log(error)
//         yield put(uploadPhotoFailure(error.message))
//     }
// } 



export default function* root() {
    yield takeEvery(
        ActionsTypes.REGISTER_USER,
        register
    );

    yield takeEvery(
        ActionsTypes.LOGIN_USER,
        login
    );

    // yield takeEvery(
    //     ActionsTypes.UPLOAD_PHOTO,
    //     uploadPhoto
    // );

}

