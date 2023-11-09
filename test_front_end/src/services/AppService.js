export const getAllPosts = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            return json;
        })
        .catch((error => {
            console.log(error);
        }));
}

export const getUserByID = async (userId) => {
    return await fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            return json;
        }).catch(error => {
            console.log(error)
        })
}

export const getAllComments = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        return json;
    }).catch(error=> {
        console.log(error);
    })
}

export const getPostCommentsByID = async (postId) => {
    return await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => {
        let list = [];
        console.log(json);
        json.forEach(element => {
            if (element.postId === postId){
                list = [...list, element];
            }
        });
        console.log("Comment list:", list);
        return list;
    }).catch(error=> {
        console.log(error);
    })
}