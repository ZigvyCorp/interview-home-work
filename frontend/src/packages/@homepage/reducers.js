import {
  SET_HAS_MORE,
  NEXT_PAGE,
  PUSH_POSTS,
  SET_ERROR,
  SET_EXPENDED_CMT, SET_KEYWORD,
  SET_LOADING,
  SET_PAGE,
  SET_POSTS,
} from './constaints';

const defaultState = {
  posts: [
    // {
    //   id: 1,
    //   title: 'Title',
    //   author: 'Author',
    //   createdAt: 'time',
    //   content: 'Content of the post',
    //   tags: ['tag1', 'tag2', 'tag3'],
    //   isExpandedCmt: false,
    //   comments: [
    //     {
    //       id: 1,
    //       username: 'Hanh',
    //       content: 'content',
    //       createdAt: 'time',
    //       avatar: 'url',
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   title: 'Title',
    //   author: 'Author',
    //   createdAt: 'time',
    //   content: 'Content of the post',
    //   tags: ['tag1', 'tag2', 'tag3'],
    //   isExpandedCmt: false,
    //   comments: [
    //     {
    //       id: 1,
    //       username: 'Hanh',
    //       content: 'content',
    //       createdAt: 'time',
    //       avatar: 'url',
    //     },
    //   ],
    // },
  ],
  page: 1,
  limit: 10,
  keyword: '',
  error: undefined,
  loading: false,
  hasMore: true
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_EXPENDED_CMT: {
      return {
        ...state,
        posts: state.posts.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isExpandedCmt: action.payload.status,
            };
          }
          return item;
        }),
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case PUSH_POSTS: {
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };
    }
    case SET_KEYWORD: {
      return {
        ...state,
        keyword: action.payload,
      };
    }
    case SET_HAS_MORE: {
      return {
        ...state,
        hasMore: action.payload,
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case NEXT_PAGE: {
      return {
        ...state,
        page: state.page + 1,
      };
    }
    default:
      return state;
  }
}
