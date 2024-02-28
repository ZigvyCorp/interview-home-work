import { useEffect, useState } from 'react';
import './CardBlog.scss'
import axios from 'axios';
import CardComment from './Comment/CardComment';
import { connect, useDispatch } from 'react-redux';
// import { store } from '../../container/Redux/store';
// import { loadComments, loadUsers } from '../../container/Redux/action';

function CardBlog(props) {
    const blogs = props.data;
    // const dispath = useDispatch()
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${blogs.userId}/comments`).then(res => setComments(res.data))
        // dispath(loadComments(comments))
    }, [])

    const [authorBlogs, setAuthorBlogs] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${blogs.userId}`).then(res => (setAuthorBlogs(res.data)))
        // dispath(loadUsers(authorBlogs))
    }, [])

    const [showComment, setShowComment] = useState(false)
    return (
        <div className="card-blog-container">
            <div className="card">
                <div className="card-blog-title">
                    {blogs.title}
                </div>
                <div className="card-blog-body">
                    <div className="row">
                        <div className="col-md-7">
                            <div>Author: {authorBlogs.name} </div>
                            <p>Create at: </p>
                            {blogs.name}
                        </div>
                        <div className="col-md-5">
                            {blogs.id}
                        </div>
                    </div>
                    <div className="blog-body">
                        {blogs.body}
                    </div>
                    <div className='reply-content'>
                        <div type="button" className='btn-show-replies' onClick={() => setShowComment((show) => !show)}>{comments.length} replies</div>
                        <hr />
                        {comments && comments.map((comment, index) => {
                            return (
                                <div key={index} >
                                    {showComment ? <CardComment data={comment} /> : null}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    );
}

function mapStatetoProps() {
    return {
        // users: store.getState().users.users,
        // comments: store.getState().comments.comments,
    }
}

function mapDispathtoProps(dispath) {
    return {
        // loadUsers: (data) => dispath(loadUsers(data)),
        // loadComments: (data) => dispath(loadComments(data)),
    }
}

export default connect(mapStatetoProps, mapDispathtoProps)(CardBlog);
