import {takeLatest,call,put,delay,select} from 'redux-saga/effects';
import * as Types from './../constants/user';
import * as Typess from './../constants/post';
import {fetchUsers,loginUsers,addUsers} from './../apis/user';
import {countPostAlls,fetchPostAlls,fetchPostUsers,addPosts} from './../apis/post';
import {fetchUserSuccess,loginUserSuccess,addUserSuccess} from './../actions/user';
import {countPostAll,paginationPostAll,countPostAllSuccess,fetchPostAll,fetchPostAllSuccess,fetchPostUserSuccess,addPostSuccess} from './../actions/post';

function* handleAddUser({payload}){
	const {user} = payload;
	const resp = yield call(addUsers,user);
	const {data,status} = resp;
	if(status === 200){
		yield put(addUserSuccess(data));
	}
}

function* handleLoginUser({payload}){
	const {user} = payload;
	const resp = yield call(loginUsers,user);
	const {data,status} = resp;
	if(status === 200){
		if(data.token){
			localStorage.setItem('token',JSON.stringify(data.token));
			window.location = '/login';
		}
		yield put(loginUserSuccess(data));
	}
}

function* handleFetchUser(){
	const resp = yield call(fetchUsers);
	const {data,status} = resp;
	if(status === 200){
		yield put(fetchUserSuccess(data));
	}
}

function* handleAddPost({payload}){
	const {post} = payload;
	const resp = yield call(addPosts,post);
	const {data,status} = resp;
	if(status === 200){
		yield put(addPostSuccess(data));
	}
}

function* handleFetchPostUser(){
	const resp = yield call(fetchPostUsers);
	const {data,status} = resp;
	if(status === 200){
		yield put(fetchPostUserSuccess(data));
	}
}

function* handleFetchPostAll({payload}){
	const {params} = payload;
	const resp = yield call(fetchPostAlls,params);
	const {data,status} = resp;
	const keyword = yield select(state => state.post.keyword);
	if(status === 200){
		if(keyword.length > 0){
			const leng = data.leng;
			yield put(countPostAllSuccess({leng}));
		}else{
			yield put(countPostAll());
		}
		yield put(fetchPostAllSuccess(data.listPost));
	}
}

function* handlePaginationPostAll({payload}){
	const{page} = payload;
	const keyword = yield select(state => state.post.keyword);
	let newAPI = {
		page:page,
		limit:5,
		search:keyword
	}
	yield put(fetchPostAll(newAPI));
}

function* handleSearch(){
	yield delay(500);
	yield put(paginationPostAll(0));
}

function* handleCountPostAll(){
	const resp = yield call(countPostAlls);
	const {data,status} = resp;
	if(status === 200){
		yield put(countPostAllSuccess(data));
	}
}

function* rootSaga(){
	// Add user
	yield takeLatest(Types.ADD_USER,handleAddUser);
	// Login
	yield takeLatest(Types.LOGIN_USER,handleLoginUser);
	// get user after when login
	yield takeLatest(Types.FETCH_USER,handleFetchUser);
	// fetch all post
	yield takeLatest(Typess.FETCH_POST_ALL,handleFetchPostAll);
	// fetch post by id user
	yield takeLatest(Typess.FETCH_POST_USER,handleFetchPostUser);
	// add post
	yield takeLatest(Typess.ADD_POST,handleAddPost);
	// search post
	yield takeLatest(Typess.SEARCH_POST,handleSearch);
	// pagination post
	yield takeLatest(Typess.PAGINATION_POST_ALL,handlePaginationPostAll);
	// count post all
	yield takeLatest(Typess.COUNT_POST_ALL,handleCountPostAll);
}

export default rootSaga;