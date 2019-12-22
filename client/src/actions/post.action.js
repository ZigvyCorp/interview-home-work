import { postConstants } from '../constants/post.constants';
import {getPostsAPI} from '../services/api/post';

export const getPostsAction = {
    getInfoPosts,
    resetInfo,
    createPost,
};

function getInfoPosts(page)
{
    return dispatch => {
        getPostsAPI.getPosts(page).then(respond => {
            dispatch({type: postConstants.GET_POSTS, data: respond.posts})
        });
    };
}
function resetInfo()
{
    return dispatch => { dispatch({type: postConstants.CLEAR_DATA}) }
}

function createPost(title,summary, content, tag)
{
    return dispatch => {
        dispatch({type: postConstants.CREATE_POST_PENDING})
        getPostsAPI.createPost(title,summary, content, tag).then(res => {
                (res.post_created) ? dispatch({type: postConstants.CREATE_POST, status: true})
                 : dispatch({type: postConstants.CREATE_POST, status: false})
        }).catch(error => {
            dispatch({type: postConstants.CREATE_POST, status: false})
        })
    };
}