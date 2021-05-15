import React, { useEffect, useState } from 'react'
import 'styles/CommentList-styles.scss'
import CommentItem from 'components/CommentItem/CommentItem'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from 'redux/actions'
import { commentsState$ } from 'redux/selectors'

export default function CommentList(props) {
    const dispatch = useDispatch()
    const [postId] = useState(props.postId)
    const comments = useSelector(commentsState$)
    // console.log(comments)

    useEffect(() => {
        dispatch(actions.getComments.getCommentsRequest(postId))
        const handleNumberCmt = number => {
            return props.takeNumber(number)
        }
        handleNumberCmt(comments?.data?.length)
    }, [dispatch, postId, props, comments?.data?.length])

    return (
        <div className="comment-list">
            {comments?.data.map(comment => (
                <CommentItem key={comment.id} data={comment} />
            ))}
        </div>
    )
}
