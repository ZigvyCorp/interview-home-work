import { call, put, takeLatest, fork, all, take } from "redux-saga/effects";
import { productconsts } from "../../constants";
import * as productWorkers from "./productWorkers";

export function* getListProductsSaga() {
  while (true) {
    yield take(productconsts.GET_LIST_PRODUCTS);
    yield fork(productWorkers.getListProducts);
  }
}

export function* getIdProductSaga() {
  yield takeLatest(
    productconsts.GET_PRODUCT_REQUEST,
    productWorkers.getProduct
  );
}

export function* addProductSaga() {
  yield takeLatest(
    productconsts.ADD_PRODUCT_REQUEST,
    productWorkers.productAdd
  );
}

export function* deleteProductSaga() {
  yield takeLatest(
    productconsts.DELETE_PRODUCT_REQUEST,
    productWorkers.deleteProductSa
  );
}

export function* updateProductSaga() {
  yield takeLatest(
    productconsts.UPDATE_PRODUCT_REQUEST,
    productWorkers.updateProductSa
  );
}

export function* testProductSaga() {
  // yield takeLatest(productconsts.TEST_GET_LIST_PRODUCT_REQUEST, testproduct);// chạy ok (cách 1)
  // yield takeEvery(productconsts.TEST_GET_LIST_PRODUCT_REQUEST, testproduct);//chạy ok (cách 2)
  while (true) {
    const action = yield take(productconsts.TEST_GET_LIST_PRODUCT_REQUEST);
    yield call(productWorkers.testproduct, action);
  }
}
const productWatchers = [
  fork(getListProductsSaga),
  all([getIdProductSaga()]),
  all([addProductSaga()]),
  all([deleteProductSaga()]),
  all([updateProductSaga()]),
  fork(testProductSaga),
];
export default productWatchers;
