// src/components/PostSummary.js
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Comment from "./Comment";
import Tags from "./Tag";

let comments = [
    {
        id: 1,
        owner: 1,
        post: 1,
        content: "Boring!!!",
        created_at: 1576506719083,
    },
    {
        id: 2,
        owner: 3,
        post: 1,
        content: "Very good. But very bad also",
        created_at: 1576506719083,
    },
    {
        id: 3,
        owner: 2,
        post: 2,
        content:
            "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. ",
        created_at: 1576506719083,
    },
];

const PostSummary = ({ post }) => {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <Container>
            <div>
                <h2>{post.title}</h2>
                <Row>
                    <Col className='col-4'>
                        <p className='text-start'>Author: {post.owner}</p>
                        <p className='text-start'>
                            Created Date: {post.created_at}
                        </p>
                    </Col>
                    <Col className='col-4'></Col>
                    <Col className='col-4'>
                        <Tags tags={post.tags} />
                    </Col>
                </Row>

                <p className='text-start pt-3'>
                    Content Summary: {post.content.substring(0, 100)}
                </p>
                <p className='text-start pt-4'>
                    <span onClick={toggleComments}>{showComments} 2</span>{" "}
                    replies
                </p>
            </div>
            {showComments ? (
                <div>
                    <hr />
                    {comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </div>
            ) : null}
        </Container>
    );
};

export default PostSummary;
