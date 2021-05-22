import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAuthor, getComments } from '../../../redux/store/actions/posts';
import Comment from './Comment'
import './styles.css'

const HomePost = (props) => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.posts.comments[props.post.id - 1])
    const author = useSelector(state => state.posts.authors[props.post.id - 1])

    const [isCmtHidden, setIsCmtHidden] = useState(true)

    // display first 100 characters
    const cmtBody = props.post.body
    const displayBody = cmtBody.length > 100 ? (props.post.body.slice(0, 100) + "...") : cmtBody


    useEffect(() => {
        dispatch(getAuthor(props.post.id, props.post.userId))
        dispatch(getComments(props.post.id))
    }, [dispatch, props.post.id, props.post.userId])


    const seeAllCommentsHandler = () => {
        setIsCmtHidden(!isCmtHidden)
    }

    const AllCommentsClassName = isCmtHidden ? "AllComments" : "AllComments show"

    return (
        <div className="PostHome mt-3 pb-3">
            <h3 className="text-center text-capitalize"><Link to={{
                pathname: "/post/" + props.post.id,
                state: {
                    post: props.post,
                    comments: comments,
                    author: author,
                }
            }}>{props.post.title}</Link></h3>

            <div className="Citation">
                <p className="mb-1">Author: {author ? author.username : ''}</p>
                <p>Created at: {props.post.date} </p>
            </div>

            <p>{displayBody}</p>

            <div className="CommentSection mt-3">
                <div className="CommentsSummary d-flex justify-content-between align-items-center">
                    <p className="text-muted h6">{comments ? comments.length : ''} replies</p>
                    <button className="SeeAllToggler" onClick={seeAllCommentsHandler}>
                        {isCmtHidden ? 'See All' : 'Hide All'}</button>
                </div>

                <div className={AllCommentsClassName}>
                    {comments ? comments.map(cmt => <Comment key={`comment-${cmt.id}-${cmt.userId}`} comment={cmt} />) : ''}
                </div>

            </div>

        </div>
    );
}

export default HomePost;