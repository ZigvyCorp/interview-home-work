import { productconsts } from "../constants";

const productInitState = {
  // getListProductsReducer
  listProducts: [], //products
  getListProductLoading: false,

  //productReducer
  productById: {}, //product
  errorGetProductById: null,

  // addProductReducer
  //addProductState
  addOneProduct: {},

  // deleteProductReducer
  productWillDelete: null,
  errorDeleProduct: null,

  // updateProductReducer
  productWillUpdate: {
    // id: 0,
    // product: {},
  },

  // testGetProductReducer
  listProductTest: [],
};

const productReducers = (state = productInitState, action) => {
  switch (action.type) {
    case productconsts.GET_LIST_PRODUCTS: {
      return {
        ...state,
        getListProductLoading: true,
      };
    }
    case productconsts.GET_LIST_PRODUCTS_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listProducts: data,
        getListProductLoading: false,
      };
    }
    case productconsts.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productById: action.product,
        errorGetProductById: null,
      };
    case productconsts.GET_PRODUCT_FAILURE:
      return {
        ...state,
        productById: null,
        errorGetProductById: action.payload.error,
      };
    case productconsts.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addOneProduct: action.product,
      };
    case productconsts.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        addOneProduct: null,
      };
    case productconsts.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        productWillDelete: action.product,
        errorDeleProduct: null,
      };
    case productconsts.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        productWillDelete: null,
        errorDeleProduct: action.payload.error,
      };
    case productconsts.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        productWillUpdate: action.product,
      };
    case productconsts.UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        productWillUpdate: null,
      };
    case productconsts.TEST_GET_LIST_PRODUCT_SUCCESS: {
      return {
        ...state,
        listProductTest: action.payload,
      };
    }
    case productconsts.TEST_GET_LIST_PRODUCT_FAILURE: {
      return {
        ...state,
        listProductTest: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducers;
