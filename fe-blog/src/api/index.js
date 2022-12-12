import PostsApi from "./postsApi";
import CommentApi from "./commentsApi";
import UsersApi from "./usersApi";

const api = () => ({
    posts: new PostsApi(),
    comments: new CommentApi(),
    users: new UsersApi()
})

export default api()