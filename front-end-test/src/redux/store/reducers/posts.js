import * as actionTypes from '../actions/actionTypes'


const initState = {
    posts: null,
    comments: [],
    authors: []
}


const PostsReducer = (state = initState, action) => {
    var postId = ''

    switch (action.type) {
        case actionTypes.SET_POSTS:
            const posts = action.posts
            posts.forEach(post => {
                // random time stamp somewhere from Jan 1st, 2021 to May 20th, 2021
                const createdAt = Math.random() * (1621555199 - 1609459200) + 1609459200
                const options = { year: 'numeric', month: 'short', day: 'numeric' }
                const date = new Date(createdAt * 1000).toLocaleDateString("en-US", options)
                post.date = date
            })
            return { ...state, posts: posts }

        case actionTypes.SET_COMMENTS:
            const comments = action.comments
            postId = action.postId

            // update the post with postId
            const commentsState = [...state.comments]
            commentsState[postId - 1] = comments
            return { ...state, comments: commentsState }

        case actionTypes.SET_AUTHOR:
            const user = action.user
            postId = action.postId

            // update the post with postId
            const authorsState = [...state.authors]
            authorsState[postId - 1] = user
            return { ...state, authors: authorsState }

        default:
            return state
    }
}


export default PostsReducer