import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const reviewContent = (content) => {
        const words = content.split(' ');
        if (words.length <= 100) {
            return content;
        }
        const shortWords = words.slice(0, 100);
        return shortWords.join(' ');
    };
    return (
        <Col sm={12} md={12} lg={12} xl={12} className='bg-white'>
            <h2 className='text-center'><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
            <Col className='mb-4'>
                <p className='mb-1'><span>Author: {post.author.name !== '' ? post.author.name : 'Unknown'}</span></p>
                <p className='mb-1'><span>Created at: {post.created_at ? post.created_at : 'Unknown'}</span></p>
            </Col>
            <p style={{ textAlign: 'justify', fontWeight: 600 }} className='text-justify'>{`${reviewContent(post.content)}..........`}</p>
        </Col>
    );
}

export default Post;
