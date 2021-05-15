import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import {
    Breadcrumb,
    Card,
    Comment,
    Tooltip,
    List,
    BackTop,
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons/'
import LoadingComponent from '../components/LoadingComponent'
import { useSelector, useDispatch } from "react-redux";
import actionTypes from '../actions/actionTypes';
import moment from "moment";
import { getPostComments } from '../actions/api-client';

const Post = () => {
    const dispatch = useDispatch();
    const { id } = useParams()

    const [comments, setComments] = useState([]);
    const [isShowComment, setIsShowComment] = useState(false);


    const { post, loading } = useSelector((state) => state.postReducer);

    useEffect(() => {
        dispatch({
            type: actionTypes.GET_POST,
            payload: { id, },
        });

        getPostComments(id)
            .then(({ data }) => {

                if (data && data.length > 0) {
                    const formatedData = data.map(e => {
                        return {
                            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                            author: `${e?.id} - AuthorName`,
                            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                            content: (
                                <p>
                                    {e.body}
                                </p>
                            ),
                            datetime: (
                                <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                                    <span>{moment().subtract(1, 'days').fromNow()}</span>
                                </Tooltip>
                            ),
                        }
                    })

                    setComments(formatedData)
                }
            })
    }, []);

    return (
        <div className="container mt-5 mb-5">
            <BackTop visibilityHeight={200} />
            {
                loading
                    ? <LoadingComponent />
                    :
                    <>
                        <div className="mb-3">
                            <Breadcrumb.Item>
                                <Link to={location => {
                                    return {
                                        pathname: `/posts`,
                                        search: location?.state?.search
                                    }
                                }}>
                                    Post Detail
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                {
                                    post?.title ? post.title : "-"
                                }
                            </Breadcrumb.Item>
                        </div>
                        <Card
                            className="mb-5"
                            title={
                                <Link to={location => {
                                    return {
                                        pathname: `/posts`,
                                        search: location?.state?.search
                                    }
                                }}>
                                    <span style={{ cursor: "pointer", color: "#000" }}><ArrowLeftOutlined /></span>
                                </Link>
                            }
                        >
                            <div className="d-flex justify-content-center text-center text-uppercase mb-4 ">
                                <h3>{post?.title || ""}</h3>
                            </div>
                            <div>
                                <div>
                                    <span><strong>Author:</strong></span>{' '}
                                    <span>{post?.id}</span>
                                </div>
                                <div>
                                    <span><strong>Created at:</strong></span>{' '}
                                    <span>{moment().format("DD/MM/YYYY HH:ss")}</span>
                                </div>
                                <div
                                    className="mt-4"
                                    dangerouslySetInnerHTML={{
                                        __html: post?.body || ""
                                    }}
                                    style={{
                                        whiteSpace: "pre-wrap"
                                    }}
                                >
                                </div>
                            </div>

                            <div className="mt-4">
                                <List
                                    className="comment-list"
                                    header={
                                        <span
                                            onClick={() => setIsShowComment(!isShowComment)}
                                            style={{
                                                cursor: "pointer"
                                            }}
                                        >
                                            {`${comments.length} replies`}
                                        </span>
                                    }
                                    itemLayout="horizontal"
                                    dataSource={comments}
                                    split
                                    renderItem={item => {
                                        if (isShowComment) {
                                            return (
                                                <li>
                                                    <Comment
                                                        actions={item.actions}
                                                        author={item.author}
                                                        avatar={item.avatar}
                                                        content={item.content}
                                                        datetime={item.datetime}
                                                    />
                                                </li>
                                            )
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                    </>
            }
        </div>
    );
};

export default Post;