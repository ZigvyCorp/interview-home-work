import {SET_EXPENDED_CMT} from './constaints'

const defaultState = {
  posts: [
    {
      id: 1,
      title: 'Title',
      author: 'Author',
      createdAt: 'time',
      content: 'Content of the post',
      tags: ['tag1', 'tag2', 'tag3'],
      isExpandedCmt: false,
      comments: [
        {
          id: 1,
          username: 'Hanh',
          content: 'content',
          createdAt: 'time',
          avatar: 'url',
        },
      ],
    },
    {
      id: 2,
      title: 'Title',
      author: 'Author',
      createdAt: 'time',
      content: 'Content of the post',
      tags: ['tag1', 'tag2', 'tag3'],
      isExpandedCmt: false,
      comments: [
        {
          id: 1,
          username: 'Hanh',
          content: 'content',
          createdAt: 'time',
          avatar: 'url',
        },
      ],
    },
  ],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case  SET_EXPENDED_CMT :{
      return {
        ...state,
        posts: state.posts.map(item=>{
          if(item.id === action.payload.id){
            return {
              ...item,
              isExpandedCmt: action.payload.status,
            }
          }
          return item
        })
      }

    }
    default:
      return state;
  }
}
