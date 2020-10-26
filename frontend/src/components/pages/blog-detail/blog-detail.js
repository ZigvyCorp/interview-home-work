import React from "react"
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getPostDetail} from "../../../redux/posts/posts.action"
import { bindActionCreators } from "redux";

const BlogDetail = (props) => {
    const dispatch = useDispatch()
    const {users, comments, postDetail} = useSelector(state => state.posts)
    let { id } = useParams();
    let query = new URLSearchParams(props.location.search);
    const userId = query.get('userId')
    React.useEffect(() => {
        const dispatchAction = bindActionCreators(getPostDetail, dispatch)
        dispatchAction(id)
    }, [dispatch, id])

    let user = users.find(x => x.id === +userId)
    let listComment = comments.filter(x => x.postId === +id)
    return (
        <div className="container">
            <h1>Title: {postDetail.title}</h1>
            <p>Auther: {user ? user.name : ""}</p>
            <p dangerouslySetInnerHTML={{ __html: postDetail.body }}></p>
            <ul>List comment:
                {listComment.map(r => (
                    <li key={r.id}>{r.body}</li>
                ))}
            </ul>
        </div>
    )
};

export default BlogDetail