import { call, put } from "redux-saga/effects";
import { API } from "../../apis";
import { productActions } from "../../actions";

function* getListProducts() {
  try {
    const data = yield call(API.getProductsData);
    yield put(productActions.getListProductsSuccess(data));
  } catch (err) {
    throw new Error(err);
  }
}

function* getProduct(action) {
  try {
    const product = yield call(API.getProductById, action.id);
    yield put(productActions.getProductSuccess(product));
  } catch (error) {
    yield put(productActions.getProductFailure(error));
  }
}

function* productAdd(action) {
  try {
    const product = yield call(API.addProduct, action.payload);
    yield put(productActions.addProductSuccess(product));
  } catch (error) {
    yield put(productActions.addProductFailure(error));
  }
}

function* deleteProductSa(action) {
  try {
    const product = yield call(API.deleteProduct, action.id);
    yield put(productActions.deleteProductSuccess(product));
  } catch (error) {
    yield put(productActions.deleteProductFailure(error));
  }
}

function* updateProductSa(action) {
  try {
    const product = yield call(API.updateProduct, action.payload);
    yield put(productActions.updateProductSuccess(product));
  } catch (error) {
    yield put(productActions.updateProductFailure(error));
  }
}

function* testproduct(action) {
  try {
    const product = yield call(API.testGetDataProduct, action.payload);
    yield put(productActions.testGetProductSuccess(product));
  } catch (error) {
    yield put(productActions.testGetProductFailure(error));
  }
}
export {
  getListProducts,
  getProduct,
  productAdd,
  deleteProductSa,
  updateProductSa,
  testproduct,
};
