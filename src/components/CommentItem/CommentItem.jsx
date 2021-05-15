import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import { USER_AVATAR } from 'common/images'
import 'styles/CommentItem-styles.scss'

export default function CommentItem(props) {
    return (
        <div className="comment-item">
            <Row className="comment-item__wrapper">
                <Col className="comment-item__left">
                    <div className="comment-item__left--avatar">
                        <Image src={USER_AVATAR} roundedCircle />
                    </div>
                </Col>
                <Col className="comment-item__right">
                    <Row className="comment-item__right--user-info">
                        <span className="comment-item__right--user-name">
                            {props?.data?.name}
                        </span>
                        <span className="comment-item__right--timing">
                            a day ago
                        </span>
                    </Row>
                    <Row className="comment-item__right--description">
                        <p className="content">{props?.data?.body}</p>
                    </Row>
                    <Button className="btn__color btn__size" variant="outline">
                        Reply to
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
