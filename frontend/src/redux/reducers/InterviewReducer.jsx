import postData from '../../assets/interview-home-work/data/posts.json';
import userData from '../../assets/interview-home-work/data/users.json';
import commentData from '../../assets/interview-home-work/data/comments.json';
import { GET_ALL_COMMENT, GET_ALL_POSTS, GET_ALL_USER, GET_COMMENT, GET_COMMENT_DETAIL, GET_DETAIL_POST, SEARCH_POSTS } from '../constants/Interview/InterviewConstants';

const initialState = {
  // postData: postData,
  // userData: userData,
  // commentData: commentData,
  postData: [],
  userData: [],
  commentData: [],
  postDetail:{},
  comments:[],
  commentDetail: {}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      // console.log(action.postData.data.data);

      // const {postData} =action;
      state.postData = action.postData.data.data
      return { ...state};
    case GET_ALL_USER:{
      state.userData = action.userData.data.data
      return { ...state};
    }
    case GET_ALL_COMMENT:{
      state.commentData = action.commentData.data.data
      return { ...state};
    }

    case SEARCH_POSTS: {
      const {postSearch} = action;
      state.postData = state.postData.filter((item)=>{
        return item.title.includes(postSearch)
      })
      console.log('state.postData : ', state.postData );
      return {...state}
    }

    case GET_DETAIL_POST: {
      state.postDetail = action.postDetail.data.data;
      return {...state}
    }

    case GET_COMMENT : {
      state.comments = action.comments.data.data
      console.log('action.comments.data.data: ', action.comments.data.data);
      return {...state}
    }
   
    default:
      return state;
  }
};
