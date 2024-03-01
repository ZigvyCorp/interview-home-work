import { useEffect } from "react"
import PaginationBar from "../Pagination"
import { useDispatch, useSelector } from "react-redux"
import { getCommentsRequest } from "../../../actions/sagaAction"
import Post from "../Blogs/Post"

const PostContent = () => {
    const { posts, comments } = useSelector(state => state.data)
    return (
        <div className="container-fluid mt-3">
            {posts.map((post, index) => (
                <Post data={post} index={index} comments={comments} key={index} />
            ))}
        </div>
    )
}

export default PostContent