export const apiPost = {
    postList: '/posts',
    postDetail: (id) => `/posts/${id}`,
    postCommentDetail: (id) => `/posts/${id}/comments`
}
