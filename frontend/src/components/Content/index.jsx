import { useDispatch, useSelector } from "react-redux"

import CommentContent from "./Blogs/Comments"
import PaginationBar from "./Pagination"
import { useEffect } from "react"
import { getCommentsRequest, getPostsRequest } from "../../actions/sagaAction"
import PostContent from "./Blogs"

const Content = () => {
    const { pending, pagination, posts } = useSelector(state => state.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostsRequest({ _page: pagination.currentPage - 1, _limit: pagination.limit, title: pagination.title }))
        if (posts.length !== 0) {
            posts.map(post => (
                dispatch(getCommentsRequest({ postId: post._id }))
            ))
        }
    }, [pagination.currentPage, pagination.limit, pagination.title, posts[0]?._id])
    return (
        <>
            <PostContent />
            {/* <CommentContent /> */}
            <PaginationBar />
        </>
    )
}

export default Content