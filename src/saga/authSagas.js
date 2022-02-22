import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import { fetchProfileResponse, setInitalLoading } from "../redux/action/ActionCreators";
import * as ActionsTypes from "../redux/action/ActionsTypes";
import * as authApi from "../services/api/authApi";



export function* register(action) {

    const {
        username,
        email,
        password,
        photo,
        company,
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

        console.log('register saga response', response)
        // zakomentarisao, jer necu da se sam loguje nakon registracije
        
        let token = response.jwt != null ? response.jwt : null;
        // console.log(response)
        let id = response.user.id;
        localStorage.setItem("id", id);
        localStorage.setItem('token', response.jwt)
        yield put(
            {
                type: ActionsTypes.REGISTER_USER_SUCCESS,
                payload: response.user
            }
        )
        localStorage.setItem('token', response.jwt)
        let photoId = null;
        if (photo != null) {
            const img = yield call(authApi.uploadPhoto, photo);
            photoId = img.payload[0].id;
        }
        yield call(authApi.createProfile, {
            name: username,
            user: response.user.id,
            userRole: role,
            company: Number(company),
            profilePhoto: photoId,
        })
        
    } catch (error) {
        console.log(error.message)
    }
};


export function* login(action) {
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
        let id = response.user.id;
        localStorage.setItem("id", id);
        localStorage.setItem('token', response.jwt)
        if (token) {
            yield put({
                type: ActionsTypes.LOGIN_USER_SUCCESS,
                payload: response.user
            })
        }
    } catch (error) {
        yield put({
            type: ActionsTypes.LOGIN_USER_FAILURE,
            payload: { message: "Check Your email and password!" }
        })
    }
}


export function* fetchProfileSaga(action) {
    try {
        console.log("Usao sam u SAGU i prosledio id");
        console.log(action.id);
        const {data} = yield call(
            authApi.fetchProfile,
            action.id
        )
        console.log('saga fetch my profile action', action) 
        console.log('saga fetch my profile response', data)
        const payload = data?.data?.[0];
        yield put(setInitalLoading(false));
        yield put(fetchProfileResponse(payload));
    } catch (error) {
        return error
    }
}

export default function* root() {
    yield takeLatest(
        ActionsTypes.REGISTER_USER,
        register
    );
    yield takeEvery(
        ActionsTypes.LOGIN_USER,
        login
    );
    yield takeLatest(
        ActionsTypes.FETCH_PROFILE_REQUEST,
        fetchProfileSaga
    )
}
