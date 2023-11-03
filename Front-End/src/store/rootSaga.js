import {  all } from 'redux-saga/effects';
import watchFetchData from '../pages/HomePage/Home/Card/duck/action';

export default function* rootSaga() {
    yield all([watchFetchData(),])
};
