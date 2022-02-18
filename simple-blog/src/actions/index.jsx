import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

//Combined those two function together
export const fetchPostsAndUsers = () => async (dispatch, getState) => {

    await dispatch(fetchPosts());

    //Refactor below
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));
    _.chain(getState().posts)
        .map('userId')//In here, every chain function will see the last function as the first argument,
        //So, 'userId' inside of 'map' function is the 2nd argument that we care about there.
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();//.value() here is means something like execute or do it function.
};

//actionCreate for blog posts
export const fetchPosts = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    };
};
//actionCreate for user-------> memoize method
// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });

//actionCreate for user-------> refactor method
export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};
