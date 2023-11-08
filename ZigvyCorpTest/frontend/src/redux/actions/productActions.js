import { productconsts } from "../constants";

export const getListProducts = (payload) => {
  return {
    type: productconsts.GET_LIST_PRODUCTS,
    payload,
  };
};

export const getListProductsSuccess = (payload) => {
  return {
    type: productconsts.GET_LIST_PRODUCTS_SUCCESS,
    payload,
  };
};

export const getProductRequest = (id) => ({
  type: productconsts.GET_PRODUCT_REQUEST,
  id,
});

export const getProductSuccess = (product) => ({
  type: productconsts.GET_PRODUCT_SUCCESS,
  product,
});

export const getProductFailure = (error) => ({
  type: productconsts.GET_PRODUCT_FAILURE,
  error,
});

export const addProductRequest = (payload) => ({
  type: productconsts.ADD_PRODUCT_REQUEST,
  payload,
});
export const addProductSuccess = (product) => ({
  type: productconsts.ADD_PRODUCT_SUCCESS,
  product,
});

export const addProductFailure = (error) => ({
  type: productconsts.ADD_PRODUCT_FAILURE,
  error,
});

export const deleteProductRequest = (id) => ({
  type: productconsts.DELETE_PRODUCT_REQUEST,
  id,
});
export const deleteProductSuccess = (product) => ({
  type: productconsts.DELETE_PRODUCT_SUCCESS,
  product,
});

export const deleteProductFailure = (error) => ({
  type: productconsts.DELETE_PRODUCT_FAILURE,
  error,
});

export const updateProductRequest = (payload) => ({
  type: productconsts.UPDATE_PRODUCT_REQUEST,
  payload,
});
export const updateProductSuccess = (product) => ({
  type: productconsts.UPDATE_PRODUCT_SUCCESS,
  product,
});

export const updateProductFailure = (error) => ({
  type: productconsts.UPDATE_PRODUCT_FAILURE,
  error,
});

// truyền vào id rồi lấy sp theo id đó, nếu lấy được thì nó nhận vào cái object/array mà
// API trả về. lấy cái object/array trả về luôn
// TEST SAGA
export const testGetProductRequest = (payload) => ({
  type: productconsts.TEST_GET_LIST_PRODUCT_REQUEST,
  payload,
});
// lúc này cái payload này là cái object/array do api trả về
export const testGetProductSuccess = (payload) => ({
  type: productconsts.TEST_GET_LIST_PRODUCT_SUCCESS,
  payload,
});

// nếu không lấy được data từ api nó sẽ trả về lỗi error cho action này
export const testGetProductFailure = (error) => ({
  type: productconsts.TEST_GET_LIST_PRODUCT_FAILURE,
  error,
});
