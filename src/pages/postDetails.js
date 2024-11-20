import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './postDetails.style.scss';
import Comment from '../components/Comment';

const PostDetails = () => {
    const posts = useSelector((state) => state.posts);
    const { postId } = useParams();
    const postDT = posts.find((post) => post.id === parseInt(postId));
    if (!postDT) {
        return <Col>Post not found</Col>;
    }
    return (
        <Container>
            <Row className='mt-3'>
                <Col>
                    <Link className='postBack' to={"/"}>Post</Link> / <span>{postDT.title}</span>
                    <h2 className='text-center text-success'>{postDT.title}</h2>
                    <Col className='infoPost'>
                        <p>Author: <span>{postDT.author.name ? postDT.author.name : 'Unknown'}</span></p>
                        <p>Created date: <span>{postDT.created_at}</span></p>
                    </Col>
                    <hr></hr>
                    <p className='postContent'>{postDT.content}</p>
                    <hr></hr>
                    <Col>
                        <h4 className='mb-3 text-warning'>Comments ({postDT.comments.length})</h4>
                        {postDT.comments.map((comment) => (
                            <p key={comment.id}>
                                <Comment comment={comment} />
                            </p>
                        ))}
                    </Col>
                </Col>
            </Row>
        </Container >
    )
}

export default PostDetails
