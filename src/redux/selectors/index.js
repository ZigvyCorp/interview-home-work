const postsState$ = state => {
    return state.posts.data
}

const usersState$ = state => {
    return state.users
}

const commentsState$ = state => {
    return state.comments
}

export { postsState$, usersState$, commentsState$ }
