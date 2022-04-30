import { Alert, Card, Col, List, Spin, Tag } from "antd";
import Section from "./../../components/Section/Section";
import "./HomePage.scss";
import CommentCustom from "./../../components/CommentCustom/CommentCustom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsThunk } from "./../../services/post/post.thunk";
import moment from "moment";

export default function HomePage() {
    const colors = [
        "magenta",
        "red",
        "volcano",
        "green",
        "orange",
        "lime",
        "cyan",
        "geekblue",
        "purple",
    ];
    const dispatch = useDispatch();
    const { loading, data: posts } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(getPostsThunk());
    }, []);

    console.log(posts);
    return (
        <div className="home-page">
            {loading ? (
                <Spin tip="Loading...">
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                </Spin>
            ) : (
                <List
                    size="large"
                    pagination={{
                        pageSize: 4,
                    }}
                    dataSource={posts}
                    renderItem={(item) => (
                        <Section>
                            <Col span={24}>
                                <Card title={item.title} bordered={false}>
                                    <div className="card-item">
                                        <div className="card-item-post">
                                            <div className="card-item-post__main">
                                                <h4 className="card-item-post__author">
                                                    Author: {item.owner.name}
                                                </h4>
                                                <h4 className="card-item-post__created-at">
                                                    Created at:{" "}
                                                    {moment(
                                                        item.createdAt
                                                    ).format(
                                                        "HH:mm DD-MM-YYYY"
                                                    )}
                                                </h4>
                                                <p className="card-item-post__content">
                                                    {item.content}
                                                </p>
                                            </div>
                                            <div className="card-item-post__tags">
                                                {item.tags &&
                                                    item.tags.map((tag) => (
                                                        <Tag
                                                            style={{
                                                                marginBottom:
                                                                    "8px",
                                                            }}
                                                            color={
                                                                colors[
                                                                    Math.floor(
                                                                        Math.random() *
                                                                            colors.length
                                                                    )
                                                                ]
                                                            }
                                                        >
                                                            {tag}
                                                        </Tag>
                                                    ))}
                                            </div>
                                        </div>
                                        <div className="card-item-comment">
                                            <CommentCustom
                                                postID={item._id}
                                                numComment={
                                                    item.comments.length
                                                }
                                            />
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Section>
                    )}
                />
            )}
        </div>
    );
}
