import { createSelector } from "reselect";

export const listProducts = (state) => state.productInitState.listProducts;
export const getListProductLoading = (state) =>
  state.productInitState.getListProductLoading;
export const productById = (state) => state.productInitState.productById;
export const errorGetProductById = (state) =>
  state.productInitState.errorGetProductById;
export const addOneProduct = (state) => state.productInitState.addOneProduct;
export const productWillDelete = (state) =>
  state.productInitState.productWillDelete;
export const errorDeleProduct = (state) =>
  state.productInitState.errorDeleProduct;
export const productWillUpdate = (state) =>
  state.productInitState.productWillUpdate;
export const listProductTest = (state) =>
  state.productInitState.listProductTest;

export const productsRemainingSelector = createSelector(
  listProducts,
  getListProductLoading,
  productById,
  errorGetProductById,
  addOneProduct,
  productWillDelete,
  errorDeleProduct,
  productWillUpdate,
  listProductTest,
  (
    listProducts,
    getListProductLoading,
    productById,
    errorGetProductById,
    addOneProduct,
    productWillDelete,
    errorDeleProduct,
    productWillUpdate,
    listProductTest
  ) => {
    return {
      listProducts,
      getListProductLoading,
      productById,
      errorGetProductById,
      addOneProduct,
      productWillDelete,
      errorDeleProduct,
      productWillUpdate,
      listProductTest,
    };
  }
);
