import React from 'react';
import './styles.scss'
import { Row, Col } from "antd"
import Comments from '../../../../components/Comments';

function ThumbnailPost(props) {
    return (
        <div className={`listing-primary ${props.className}`}>
            <div className="listing-primary-title">
                <h1>Post title</h1>
            </div>
            <Row className="listing-primary-info">
                <Col span={8} className="listing-primary-info-user">
                    <h2>
                        Author
                    </h2>
                    <h2>
                        Created at
                    </h2>
                </Col>
                <Col span={8} offset={8} className="listing-primary-info-tag">
                    <span>Tags</span>
                </Col>
            </Row>
            <div className="listing-primary-content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ratione incidunt quasi omnis debitis libero sequi quas eius voluptates. Repellat delectus doloremque, cumque illum porro obcaecati enim rerum ipsa velit.</p>
            </div>
            <Comments />
        </div>
    );
}

export default ThumbnailPost;