import React, { useEffect, useState } from 'react';
import Comment from '../../common/AllPosts/HomePost/Comment'
import { useSelector } from 'react-redux'

const PostPage = (props) => {
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState(null)
    const [author, setAuthor] = useState(null)

    useEffect(() => {
        if (!props.location.state) {
            props.history.push("/")
        }
        else {
            setPost(props.location.state.post)
            setComments(props.location.state.comments)
            setAuthor(props.location.state.author)
        }
    })



    return (
        (post) ? <div className="PostPage">
            <h1 className="text-capitalize font-weight-bold">{post.title}</h1>
            <p className="text-muted">{post.body.slice(0, 50)}</p>

            <div className="Citation d-flex align-items-center my-4 border-bottom pb-3">
                <div className="Author d-flex align-items-center mr-5">
                    <img src="https://64.media.tumblr.com/cff69520c5a17d4101b01d69f1ab9d9c/65f44ad29cb496a6-a3/s400x600/f96b1e4259896e3adc4ae0520efbd6ab2361d684.jpg"
                        alt="author profile" className="rounded-circle"
                        width="50" height="50" />
                    <p className="mb-0 ml-2">By {author.username}</p>
                </div>
                <p className="mb-0">Posted on: {post.date}</p>
            </div>

            <div className="PostBody my-5">
                <p>{post.body}</p>
            </div>

            <div className="border-top pt-3">
                <h3>{comments.length} comments</h3>
                {comments.map(cmt => <Comment comment={cmt} />)}
            </div>
        </div> : ''
    );
}

export default PostPage;