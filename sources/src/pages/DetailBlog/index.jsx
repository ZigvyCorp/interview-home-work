import { Row, Col, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { loadBlog } from '../../actions/blog';
import Comments from '../../components/Comments';
import './styles.scss'


const toTimeString = (seconds) => {
    if (seconds)
        return moment(seconds).format('DD-MM-YYYY');
}

function DetailBlog(props) {
    const blog = useSelector(state => state.blog.blog)
    const listPosts = useSelector(state => state.listPosts.listPosts)
    const [nameOwner, setNameOwner] = useState("");
    const listUsers = useSelector(state => state.listUsers.listUsers)

    const dispatch = useDispatch()
    useEffect(() => {
        let detailBlog = listPosts.filter((item) => {
            return item.id === parseInt(props.match.params.id)
        })
        dispatch(loadBlog(detailBlog[0]));
    }, []);
    useEffect(() => {
        let postUser = listUsers.filter((item) => {
            return item.id === blog?.owner
        })
        setNameOwner(postUser[0]?.name)
    }, [blog]);
    return (
        <div className="detail-blog">
            <div className="detail-blog-title">
                <h1>{blog?.title}</h1>
            </div>
            <Row className="detail-blog-info">
                <Col span={8} className="detail-blog-info-user">
                    <h2>
                        Author:
                        <span>{nameOwner}</span>
                    </h2>
                    <h2>
                        Created at:
                        <span>
                            {toTimeString(blog?.created_at)}
                        </span>
                    </h2>
                </Col>
                <Col span={8} offset={8} className="detail-blog-info-tag">
                    {blog?.tags?.map((item, index) => <Tag key={index} color="geekblue">{item}</Tag>)}
                </Col>
            </Row>
            <div className="detail-blog-content">
                <p>{blog?.content}</p>
            </div>
            <div className="detail-blog-comment">
                <Comments defaultValue="true" idPost={blog?.id} />
            </div>
        </div>
    );
}

export default DetailBlog;