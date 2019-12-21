import { postConstants } from '../constants/post.constants';
import {getPostsAPI} from '../services/api/post';

export const getPostsAction = {
    getInfoPosts,
    resetInfo,
    //getInfoPost
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

