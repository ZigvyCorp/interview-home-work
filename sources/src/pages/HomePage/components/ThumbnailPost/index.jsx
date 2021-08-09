import React, { useEffect, useState } from 'react';
import './styles.scss'
import { Row, Col, Button } from "antd"
import Comments from '../../../../components/Comments';
import moment from 'moment';
import { Tag } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const toTimeString = (seconds) => {
    if (seconds)
        return moment(seconds).format('DD-MM-YYYY');
}
const limitContents = (content) => {
    if (content.length > 100) {
        content = content.substr(0, 100);
        return content + "...";
    } else
        return content;
}

function ThumbnailPost(props) {

    const [nameOwner, setNameOwner] = useState("");
    const listUsers = useSelector(state => state.listUsers.listUsers)
    const history = useHistory();

    useEffect(() => {
        let postUser = listUsers.filter((item) => {
            return item.id === props.item.owner
        })
        setNameOwner(postUser[0]?.name)
    }, [listUsers])

    return (
        <div className={`listing-primary ${props.className}`}>
            <div className="listing-primary-title">
                <h1>{props.item.title}</h1>
            </div>
            <Row className="listing-primary-info">
                <Col span={8} className="listing-primary-info-user">
                    <h2>
                        Author:
                        <span>
                            {nameOwner}
                        </span>
                    </h2>
                    <h2>
                        Created at:
                        <span>
                            {toTimeString(props.item.created_at)}
                        </span>
                    </h2>
                </Col>
                <Col span={8} offset={8} className="listing-primary-info-tag">
                    {props.item.tags.map((item, index) => <Tag key={index} color="geekblue">{item}</Tag>)}
                </Col>
            </Row>
            <div className="listing-primary-content">
                <p>{limitContents(props.item.content)}</p>
            </div>
            <Comments idPost={props.item.id} />
            <div className="listing-primary-button">
                <Button className="btn-custom" onClick={() => { history.push(`/chi-tiet/${props.item.id}`); }}>Detail</Button>
            </div>
        </div >
    );
}

export default ThumbnailPost;