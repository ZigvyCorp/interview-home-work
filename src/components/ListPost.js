import React, { useState } from 'react';
import Post from './Post';
import Comment from './Comment';
import { Col, Pagination } from 'react-bootstrap';
import './listPost.scss';
import { TbLayoutNavbarExpandFilled, TbLayoutBottombarExpandFilled } from 'react-icons/tb';

const ListPort = ({ posts }) => {
    const [expandedComments, setExpandedComments] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 2;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const toggleExpanded = (postId) => {
        setExpandedComments((prevState) => ({
            ...prevState,
            [postId]: !prevState[postId],
        }));
    };

    return (
        <div>
            <Col>
                {currentPosts.map((post) => (
                    <Col className='border-list' key={post.id}>
                        <Post post={post} />
                        <Col>
                            <p>
                                {post.comments.length} Replies
                                <button className='expand-collapse-btn' onClick={() => toggleExpanded(post.id)}>
                                    {expandedComments[post.id] ?
                                        <TbLayoutBottombarExpandFilled className='text-danger' />
                                        : <TbLayoutNavbarExpandFilled className='text-danger' />}
                                </button>
                            </p>
                            <hr className='text-secondary'></hr>

                            {expandedComments[post.id] && (
                                post.comments.map((comment) => (
                                    <p key={comment.id}>
                                        <Comment comment={comment} />
                                    </p>
                                ))
                            )}
                        </Col>
                    </Col>
                ))}

            </Col>
            {currentPosts.length > 0 && (
                <Pagination className='justify-content-center'>
                    <Pagination.First onClick={() => paginate(1)} />
                    {/* <Pagination.Prev
                onClick={() =>
                    paginate(currentPage - 1 > 0 ? currentPage - 1 : 1)
                }
            /> */}
                    {[...Array(totalPages).keys()].map((number) => (
                        <Pagination.Item
                            key={number}
                            active={number + 1 === currentPage}
                            onClick={() => paginate(number + 1)}
                        >
                            {number + 1}
                        </Pagination.Item>
                    ))}
                    {/* <Pagination.Next
                onClick={() =>
                    paginate(
                        currentPage + 1 < totalPages
                            ? currentPage + 1
                            : totalPages
                    )
                }
            /> */}
                    <Pagination.Last onClick={() => paginate(totalPages)} />
                </Pagination>
            )}

        </div>
    );
}

export default ListPort;
