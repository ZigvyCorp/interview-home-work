import * as ActionType from './../constants/action-type';

export const getPosts = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                type: ActionType.GET_POSTS,
                listPosts: posts
            }))
    };
};

export const getComments = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(comments => dispatch({
                type: ActionType.GET_COMMENTS,
                listComments: comments
            }))
    };
};