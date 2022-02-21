import {takeEvery, call, put, takeLatest} from "redux-saga/effects";
import {fetchProfileResponse} from "../redux/action/ActionCreators";
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
            const response = yield call(
                authApi.register, {
                    username,
                    email,
                    password
                });

            console.log('register saga response', response)

            yield put({
                type: 'AFTER_REGISTER_SUCCESS',
            })


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

        } catch (error) {}
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
                    payload: {
                        message: "Check Your email and password!"
                    }
                })
            }
        }


        export function* fetchProfileSaga(action) {
            try {
                const response = yield call(
                    authApi.fetchProfile,
                    action.id
                )
                if (response && response.data && response.data.data && response.data.data[0]) {
                    const payload = response.data.data[0];
                    yield put(fetchProfileResponse(payload));
                }
            } catch (error) {
                return error
            }
        }







        export function* autoLogin(action) {
            const myId = localStorage.getItem("id");
            try {
                const response = yield call(authApi.fetchAutoLogin, myId)
                console.log('saga autologin response', response);
                if (response && response.data && response.data.confirmed) {
                    yield put({
                        type: ActionsTypes.LOGIN_USER_SUCCESS,
                        payload: response.data
                    })
                }
            } catch (error) {
                yield put({
                    type: ActionsTypes.LOGIN_USER_FAILURE,
                    payload: {
                        message: "Check Your email and password!"
                    }
                })
            }
        }




        export function* logout() {
            console.log('ovde uradi logout!')
            localStorage.removeItem('token');
            localStorage.removeItem('id');

            // redirect
        }



        export default function* root() {
            yield takeLatest(
                ActionsTypes.REGISTER_USER,
                register
            );

            yield takeEvery(
                ActionsTypes.AUTO_LOGIN,
                autoLogin
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