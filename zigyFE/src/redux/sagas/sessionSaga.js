import {updateProfile} from "../actions/userAction";
import history from '../../history';
import {takeLatest, call, put } from 'redux-saga/effects';
import {loginAPI, signUpAPI} from "../axios/userAxios";

function* loginEffectSaga(action){
    try {
        let {data} = yield call(loginAPI,action.payload );
        //Object.keys(data).forEach(key => localStorage.setItem(key,data[key]));
        yield put(updateProfile(data));
        history.push('/home');
    } catch(e){
        //console.log(e);
        alert(e);
    }
}

function* signUpEffectSaga(action){
    let data = yield call(signUpAPI, action.payload)
    if(data){
        history.push('/sign-in');
    }else{
        alert('Sign Up fail, please try again')
    }
}

export function* loginWatcherSaga(){
    yield takeLatest('LOGIN_WATCHER', loginEffectSaga);
}

export function* signUpWatcherSaga(){
     yield takeLatest('SIGNUP_WATCHER', signUpEffectSaga);
}
