import { CaretDownOutlined } from "@ant-design/icons"
import { Avatar, Button, Col, Divider, List, Row, Space, Spin, Tag, Typography } from "antd"
import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPathParam } from "../../helper/getPathParam"
import { GET_POST, GET_POST_COMMENTS, GET_USER } from "../../redux/saga/action"
import { IPayloadGetPost, IPostComment } from "../../redux/saga/post/model"
import { IPayloadGetUser } from "../../redux/saga/user/model"
import { RootState } from "../../redux/store"
import MainLayout from "../layout/MainLayout"
import { tags } from "../blog/BlogComponent"

const BlogDetailComponent = () => {
    const postId = getPathParam('id')
    const dispatch = useDispatch()
    const post = useSelector((state: RootState) => state.postReducer.post) || {}
    const postComments = useSelector((state: RootState) => state.postReducer.postComments) || [];
    const user = useSelector((state: RootState) => state.userReducer.user) || {}
    const isLoading = useSelector((state: RootState) => state.uiReducer.isLoading)

    useEffect(() => {
        dispatch({
            type: GET_POST,
            payload: { postId: postId } as IPayloadGetPost
        })
        dispatch({
            type: GET_USER,
            payload: { userId: Number(postId) > 10 ? 10 : postId } as IPayloadGetUser
        })
        dispatch({
            type: GET_POST_COMMENTS,
            payload: {
                postId: postId
            }
        });
    }, [postId])

    return (
        <MainLayout key={'blog'} activeKey={"blog"}>
            <Spin spinning={isLoading}>
                <Row key={post.id} gutter={[20, 20]}>
                    <Col xs={24}>
                        <Typography.Title>
                            {post.title}
                        </Typography.Title>
                    </Col>
                    <Col xs={24}>
                        <Row gutter={[10, 10]} justify={"space-between"}>
                            <Col xs={24} sm={24} md={12} lg={8}>
                                <div>Author: {user.name}</div>
                                <div>Created at: {moment().subtract().format("MMM DD, YYYY")}</div>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={8}>
                                <Space size={[0, 8]} wrap>
                                    {
                                        tags.map((tag: string) => <Tag color={tag}>{tag}</Tag>)
                                    }
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24}>{post.body}</Col>
                    <Col xs={24}>
                        <Button type="link">
                            Replies <CaretDownOutlined />
                        </Button>

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
                    </Col>
                </Row>
            </Spin>
        </MainLayout>
    )
}

export default BlogDetailComponent
