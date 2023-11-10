import {call, put, takeLatest} from 'redux-saga/effects'

export const getAllPosts = async () => {
    return await fetch('http://localhost:5001/api/posts')
        .then(response => {
            return response.json()
        }
        )
        .then(json => {
            console.log('json:', json);
            return json.result;
        })
        .catch((error => {
            console.log(error);
        }));
}

export const getPostCommentsByID = async (postId) => {
    return await fetch('http://localhost:5001/api/getCommentsByPostId', { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ postId: postId }) })
        .then(response => response.json())
        .then(json => {
            let list = [];
            console.log('Get post comments by id:', json);
            json.result.forEach(element => {
                if (element.postId === postId) {
                    list = [...list, element];
                }
            });
            console.log("Comment list:", list);
            return list;
        }).catch(error => {
            console.log(error);
        })
}