import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostByIdRequest, fetchPostByIdSuccess } from '../redux/actions/postActions';
import { useParams } from 'react-router-dom';
import { formatDate, getRandomDaysAgo, getRandomAvatar } from '../utils/utils';

const PostDetails = () => {
    const dispatch = useDispatch();
    const { selectedPost = {}, loading, error } = useSelector((state) => state);
    const { id } = useParams();
    let currentSelectedPost = selectedPost;

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('persist:root'));
        const localSelectedPost = localStorageData ? JSON.parse(localStorageData.selectedPost) : null;

        if (localSelectedPost) {
            console.log("Using localSelectedPosts from LocalStorage:", localSelectedPost);
            currentSelectedPost = localSelectedPost;
        } else {
            console.log("Fetching localSelectedPosts from API...");
            dispatch(fetchPostByIdRequest(id));
        }
    }, []);

    if (loading) {
        return (
            <div className="container mt-4 text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error != '') {
        return (
            <div className="container mt-4">
                <p className="text-danger">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            {currentSelectedPost && (
                <>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="card-title text-center">{currentSelectedPost.title}</h2>
                            <p className="card-text fw-bold">{currentSelectedPost.body}</p>
                            <p className="text-muted">Created at: {formatDate(new Date())}</p>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h3 className="card-title mb-0">Author</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <p><strong>Name:</strong> {currentSelectedPost.userId?.name}</p>
                                    <p><strong>Username:</strong> {currentSelectedPost.userId?.username}</p>
                                    <p><strong>Email:</strong> {currentSelectedPost.userId?.email}</p>
                                </div>
                                <div className="col-md-6">
                                    <p><strong>Phone:</strong> {currentSelectedPost.userId?.phone}</p>
                                    <p><strong>Website:</strong> <a href={`http://${currentSelectedPost.userId?.website}`} target="_blank" rel="noopener noreferrer">{currentSelectedPost.userId?.website}</a></p>
                                    <p><strong>Address:</strong> {`${currentSelectedPost.userId?.address?.street}, ${currentSelectedPost.userId?.address?.suite}, ${currentSelectedPost.userId?.address?.city}, ${currentSelectedPost.userId?.address?.zipcode}`}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h3 className="card-title mb-0">{currentSelectedPost.comments?.length || 0} replies</h3>
                        </div>
                        <div className="card-body">
                            {currentSelectedPost.comments?.length > 0 ? (
                                currentSelectedPost.comments.map(comment => (
                                    <div key={comment._id} className="d-flex border p-2 mb-2 rounded m-1">
                                        <img
                                            src={getRandomAvatar()}
                                            alt={`${comment.name}'s avatar`}
                                            className="rounded-circle m-2"
                                            style={{ width: '40px', height: '40px' }}
                                        />
                                        <div>
                                            <strong>{comment.name}</strong> {getRandomDaysAgo()}<br />
                                            <span>{comment.body}</span><br />
                                            <button className="btn p-0 mt-3 mb-3">Reply to</button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No replies yet.</p>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default PostDetails;
