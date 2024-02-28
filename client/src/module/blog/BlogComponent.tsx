import { CaretDownOutlined, SelectOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Divider, Empty, List, Pagination, Row, Space, Spin, Tag, Typography } from "antd";
import { flatMap, isEmpty } from 'lodash';
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { truncateString } from "../../helper/truncateString";
import { GET_POSTS, GET_POST_COMMENTS, GET_USERS } from "../../redux/saga/action";
import { IPayloadGetPosts, IPost, IPostComment } from "../../redux/saga/post/model";
import { RootState } from "../../redux/store";
import MainLayout from "../layout/MainLayout";
import FormSearchPost from "./components/FormSearchPost";

const BlogComponent = () => {
    const [page, setPage] = useState(0 as number);
    const [pageSize, setPageSize] = useState(10 as number);
    const [isVisibleComment, setIsVisibleComment] = useState({
        visible: false,
        postId: -1
    } as { visible: boolean, postId: number })

    const dispatch = useDispatch();
    const posts = useSelector((state: RootState) => state.postReducer.posts) || [];
    const postComments = useSelector((state: RootState) => state.postReducer.postComments) || [];
    const users = useSelector((state: RootState) => state.userReducer.users) || [];
    const isLoading = useSelector((state: RootState) => state.uiReducer.isLoading)

    const getUsers = () => {
        let repeatUsers = []
        for (let i = 0; i < pageSize / 10; i++) {
            repeatUsers.push(users)
        }
        const flatRepeatUsers = flatMap(repeatUsers)
        return flatRepeatUsers
    }

    const getDataBlogs = () => {
        const users = getUsers()
        const blogs = posts.map((post: IPost, index: number) => {
            return { ...post, ...{ author: users[index] } };
        }) || []
        return blogs
    }

    const blogs = getDataBlogs()


    useEffect(() => {
        dispatch({
            type: GET_POSTS,
            payload: { _limit: pageSize, page: page } as IPayloadGetPosts,
        });
        dispatch({
            type: GET_USERS,
        });
    }, [page, pageSize]);

    useEffect(() => {
        if (isVisibleComment.visible && isVisibleComment.postId > -1) {
            dispatch({
                type: GET_POST_COMMENTS,
                payload: {
                    postId: isVisibleComment.postId
                }
            });
        }
    }, [isVisibleComment])

    const onToggleComment = (postId: number) => {
        if (postId !== isVisibleComment.postId) {
            setIsVisibleComment({
                visible: true,
                postId: postId
            })
        } else {
            setIsVisibleComment({
                visible: !isVisibleComment.visible,
                postId: postId
            })
        }
    }

    return (
        <MainLayout activeKey="blog">
            <Spin spinning={isLoading}>
                <Col xs={24} sm={24} md={12} lg={10} xl={8}>
                    <FormSearchPost
                        pageSize={pageSize}
                        page={page}
                    />
                </Col>
                {
                    isEmpty(blogs) && <Empty />
                }
                <Row gutter={[10, 10]}>
                    {blogs.map((post: IPost, index: number) => {
                        return (
                            <Col xs={24}>
                                <Card size="small">
                                    <Blog
                                        isVisibleComment={isVisibleComment.visible && isVisibleComment.postId === post.id}
                                        postComments={postComments}
                                        onToggleComment={() => onToggleComment(post.id)}
                                        post={post}
                                        index={index}
                                    />
                                </Card>

                            </Col>
                        );
                    })}
                </Row>
            </Spin>

            <br />

            <Pagination
                onChange={(page: number, pageSize: number) => {
                    setPage(page)
                    setPageSize(pageSize)
                }}
                pageSize={pageSize}
                current={page}
                total={100}
            />
        </MainLayout >
    );
};

export default BlogComponent;


interface IProps {
    postComments: IPostComment[]
    post: IPost
    index: number
    onToggleComment: () => void
    isVisibleComment: boolean
}

export const Blog = (props: IProps) => {
    const { post, index, onToggleComment, postComments, isVisibleComment } = props

    return <Row key={post.id} gutter={[20, 20]}>
        <Col xs={24}>
            <Link to={{ pathname: `/blog/${post.id}` }}>
                View Detail <SelectOutlined />
            </Link>
            <Typography.Title>
                {post.title}
            </Typography.Title>
        </Col>
        <Col xs={24}>
            <Row gutter={[10, 10]} justify={"space-between"}>
                <Col xs={24} sm={24} md={12} lg={8}>
                    <div>Author: {post?.author?.name || '--/--'}</div>
                    <div>Created at: {moment().subtract(index, "d").format("MMM DD, YYYY")}</div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8}>
                    <Space size={[0, 8]} wrap>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="geekblue">geekblue</Tag>
                        <Tag color="purple">purple</Tag>
                    </Space>
                </Col>
            </Row>
        </Col>
        <Col xs={24}>{truncateString(post.body, 100)}</Col>
        <Col xs={24}>
            <Button onClick={onToggleComment} type="link">
                Replies <CaretDownOutlined />
            </Button>
            {
                isVisibleComment && <>
                    <Divider className="antd-custom-divider" />
                    <List
                        dataSource={postComments}
                        renderItem={(item: IPostComment) => (
                            <List.Item key={item.id}>
                                <List.Item.Meta
                                    avatar={<Avatar src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />}
                                    title={<span>{item.name}</span>}
                                    description={<span>{item.body}</span>}
                                />

                            </List.Item>
                        )}
                    />
                </>
            }
        </Col>
    </Row>
}
