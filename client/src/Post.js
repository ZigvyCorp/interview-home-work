import './App.css';
import 'bootstrap/scss/bootstrap.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostDetail } from './redux/reducers/postReducer';
import { getUser } from './redux/reducers/userReducer';
import { getComment } from './redux/reducers/commentReducer';
import { Link, useParams } from 'react-router-dom';


function App() {
    const postDetail = useSelector(state => state.postReducer.postDetail)
    const user = useSelector(state => state.userReducer.user)
    const comment = useSelector(state => state.commentReducer.comment)
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        dispatch(getPostDetail(params.id))
        dispatch(getUser())
        dispatch(getComment())
    }, [dispatch, params.id])
    let date = new Date(postDetail.createdAt).toLocaleDateString('en-GB');
    return (
        <>
            <div className='bg-dark-subtle' style={{ minHeight: "1080px" }}>
                <header className='px-5 py-2 d-flex justify-content-between align-items-center bg-secondary text-light'>
                    <div>
                        <Link to="/" className='text-light fw-bold text-decoration-none bg-danger p-3 rounded-4'>
                            Home
                        </Link>
                    </div>
                    <div className='p-3'>
                        <Link to="/" className='text-light text-decoration-none fw-bold bg-danger p-3 rounded-4'>
                            Post Detail
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className='text-light text-decoration-none fw-bold bg-danger p-3 rounded-4'>
                            User
                        </Link>
                    </div>
                </header>
                <main className='container py-5'>
                    {/* let date = new Date(postDetail.createdAt).toLocaleDateString('en-GB'); */}
                    <div className='my-5 rounded-3 p-3 bg-white'>
                        {/* Assign User to Post to get name */}
                        {user.map((user, index) => {
                            if (postDetail.user === user._id) {
                                return (
                                    <div key={index}>
                                        <h2 className='text-center'>{postDetail.title}</h2>
                                        <p className='fs-5'>Author: <span className='text-danger fw-bold'>{user.name}</span></p>
                                        <p className='fs-5'>Create at:  <span className='fw-bold'>{date}</span></p>
                                        <p>
                                            {postDetail.content}
                                        </p>
                                    </div>
                                )
                            }
                        })}
                        {postDetail.comment?.length > 0
                            ?
                            // Use collapse boostrap to hide and show comment, example by data-bs-target=#post654c465298f704c2c88c5b15
                            <button className='btn btn-primary' data-bs-toggle="collapse" data-bs-target={`#post${postDetail._id}`}>
                                {postDetail.comment.length} replies
                            </button>
                            :
                            ""
                        }
                        <div className='border boder-top border-primary border-1 my-3'></div>
                        {/* Assign Comment to Post by Id */}
                        {comment.map((comment, index) => {
                            let date = new Date(comment.createdAt).toLocaleDateString('en-GB');
                            if (comment.post === postDetail._id) {
                                return (
                                    <div key={index}>
                                        {/* Assign User to comment's user by Id */}
                                        {user.map((user, index) => {
                                            if (comment.user === user._id) {
                                                return (
                                                    <div key={index}>
                                                        {/* Use collapse boostrap to hide and show comment, example by id=post654c465298f704c2c88c5b15 */}
                                                        <div className="collapse" id={`post${postDetail._id}`}>
                                                            <div className='d-flex pb-4' key={index}>
                                                                <div className='col-1 p-2 avatar'>
                                                                    <img src={`https://picsum.photos/id/${index + 10}/200/200`} className="w-100 rounded-circle" alt="" />
                                                                </div>
                                                                <div className='col-10 detail ms-3 p-3 d-flex flex-column justify-content-center 
                                  border border-dark rounded-3'>
                                                                    <p className='fw-bold mb-1 text-danger'>
                                                                        {user.name} - <span className='text-secondary'>{date}</span>
                                                                    </p>
                                                                    <p className='mb-1'>
                                                                        {comment.content}
                                                                    </p>
                                                                    <a style={{ cursor: 'pointer' }}>Reply on</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </main>
            </div>
            <footer className='px-5 py-3 text-center bg-secondary text-light'>
                <h2>Footer</h2>
            </footer>
        </>
    );
}

export default App;
