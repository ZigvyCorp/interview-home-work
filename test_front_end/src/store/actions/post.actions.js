export const FETCH_POST_BEGIN = "FETCH_POST_BEGIN";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILED = "FETCH_POST_FAILED";

export const fetch_posts = () => {
    return dispatch => {
        dispatch(fetch_posts_begin);
        return fetch('http://localhost:5001/api/posts')
        .then(response => {
            return response.json()
        }
        )
        .then(json => {
            console.log('json in actions:', json);
            dispatch(fetch_posts_success, json.result)
        })
        .catch((error => {
            dispatch(fetch_posts_failed, error)
        }));
    }
}

export const fetch_posts_success = (result) =>{
    return {type: FETCH_POST_SUCCESS, result};
}

export const fetch_posts_failed = (result) => {
    return {type: FETCH_POST_FAILED, result};
}

export const fetch_posts_begin = () => {
    return {type: FETCH_POST_BEGIN};
}