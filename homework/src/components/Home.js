import React, { useState, useEffect } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import * as action from './../redux/actions';

const Home = ({ getPosts, getComments, listPosts, listComments }) => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [inputSearch, setInputSearch] = useState('');

    useEffect(() => {
        setPosts(listPosts)
        return () => {
        };
    }, [listPosts]);

    useEffect(() => {
        setComments(listComments)
        return () => {
        };
    }, [listComments]);

    useEffect(() => {
        getPosts();
        getComments();
        return () => {
            // cleanup
        };
    }, []);

    useEffect(() => {
        let temPosts = listPosts.filter(post => post.title.toLowerCase().includes(inputSearch.toLowerCase()));
        setPosts(temPosts);
        return () => {
            // cleanup
        }
    }, [inputSearch])

    const search = input => {
        setInputSearch(input);
    }

    const countComment = id => {
        let count = 0;
        comments.forEach(comment => {
            if (comment.postId === id) {
                count++
            }
        })
        return count
    }

    return (
        <main>
            <Search search={search} inputSearch={inputSearch} />
            <section className='post mt-4'>
                <div className='own-container'>
                    {posts.map(post => (
                        <div className='post-container pt-3 pb-5' key={post.id}>
                            <div className='post-title text-center'>
                                <h2>{post.title}</h2>
                            </div>
                            <div className='row justify-content-space-between'>
                                <div className='col-6'>
                                    <p className='mb-1'>Author: John Smith</p>
                                    <p className='mb-1'>Created at: Sep 20, 2018</p>
                                </div>
                                <div className='col-6'>
                                    <button>Tags</button>
                                </div>
                            </div>
                            <div className='post-content mt-4'>
                                <p>{post.body}
                                </p>
                            </div>
                            <div className='post-comments'>
                                <a className='post-replies' data-bs-toggle="collapse" href={`#Replies${post.id}`} aria-expanded="false" aria-controls={`Replies${post.id}`}>
                                    {countComment(post.id)} replies
                                </a>
                                <div className="collapse mt-3" id={`Replies${post.id}`}>
                                    <div className="card card-body">
                                        {
                                            comments.map(comment =>
                                                comment.postId === post.id ? <p key={comment.id}>
                                                    {comment.body}
                                                </p> : null
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main >
    );
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: async () => {
            await dispatch(action.getPosts())
        },
        getComments: async () => {
            await dispatch(action.getComments())
        }
    }
}

const mapStateToProps = state => {
    return {
        listPosts: state.postReducer.listPosts,
        listComments: state.commentReducer.listComments,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
