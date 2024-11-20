import React from "react";
import { Row, Col } from "react-bootstrap";

const Comment = ({ comment }) => {
    return (
        <div className='text-start pt-2 pb-4'>
            <Row>
                <Col className='col-1'>
                    <img
                        src={"/assets/images/logo.png"}
                        alt='Brand Logo'
                        width='50'
                        height='50'
                        className='d-inline-block align-top'
                    />
                </Col>
                <Col>
                    <p>
                        <small>
                            Comment Author: {comment.owner}
                            {`\t`}
                            <span className='text-secondary'>
                                {comment.created_at}
                            </span>
                        </small>
                    </p>

                    <p>{comment.content}</p>

                    <p className='text-secondary'>
                        <small>Reply to</small>
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default Comment;
