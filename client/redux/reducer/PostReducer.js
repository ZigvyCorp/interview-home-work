import {  
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_FAIL,
  GET_POST_DETAIL_SUCCESS,
  GET_POST_DETAIL_REQUEST,
  GET_POST_DETAIL_FAIL, 
  ADD_NEW_POST_SUCCESS,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS
  } 
   from '../actions/ActionsType';

// Initial State
const initialState = 
{ 
  data: [],
  loadingPost: false,
  searchData: [],
  postDetail: {},
  detailLoading: false,
  searchKeyword:'',
  total: 0,
  page: 0
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_POST :
    //   return {
    //     data: [action.post, ...state.data],
    //   };
    case GET_ALL_POSTS_REQUEST:
      return {
        ...state,
        loadingPost: true,
      };

    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        data: action.page === 1 ? action.payload : state.data.concat(action.payload),
        total: action.total,
        loadingPost: false
      };

    case GET_ALL_POSTS_FAIL:
      return {
        ...state,
        loadingPost: false
      };      

    case GET_POST_DETAIL_REQUEST:
      return {
        ...state,
        detailLoading: true
      };

    case GET_POST_DETAIL_SUCCESS:
    return {
      ...state,
      postDetail: action.payload,
      detailLoading: false
    };

    case GET_POST_DETAIL_FAIL:
      return {
        ...state,
        detailLoading: false
      };

    case ADD_NEW_POST_SUCCESS:{
      const { payload, owner } = action
      const post = {...payload, owner: owner }
      return {
        ...state,
        data: [post, ...state.data]
      }
    }
    
    case SEARCH_POST_REQUEST:{
      const { title } = action
      return {
        ...state,
        searchKeyword: title
      }
    }

    case SEARCH_POST_SUCCESS:
      return {
        ...state,
        searchData: action.payload
      }
    // case DELETE_POST :
    //   return {
    //     data: state.data.filter(post => post.cuid !== action.cuid),
    //   };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

export const getPostsTotalCount = state => state.posts.total;

export const getLoadingPost = state => state.posts.loadingPost;



export const getSearchPosts = state => state.posts.searchData;

export const getSearchKey = state => state.posts.searchKeyword;


// Get post detail
export const getPost = state => state.posts.postDetail;

export const getPostDetailLoading = state => state.posts.detailLoading;


// Export Reducer
export default PostReducer;
