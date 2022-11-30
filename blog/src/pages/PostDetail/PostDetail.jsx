import { Button, Card, Col, Divider, Row, Skeleton, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import commentApi from "../../api/commentApi";
import postApi from "../../api/postApi";
import Comments from "../../components/Comment/Comment";
import TagSlug from "../../components/TagSlug/TagSlug";
const { Title, Paragraph, Text, Link } = Typography;
const PostDetail = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        async function getPostDetail() {
            try {
                const postDetail = await postApi.getById(params.id);
                const commentsOfPost = await commentApi.getCommentsOfPost(
                    params.id
                );
                setData({ post: postDetail, comment: commentsOfPost });
            } catch (error) {
                console.log(error);
            }
        }
        getPostDetail();
    }, []);

    return (
        <>
            {data ? (
                <>
                    <Button type="primary" onClick={() => navigate(-1)}>
                        Go back
                    </Button>
                    <Card title={data?.post.title}>
                        <Row>
                            <Col span={18}>
                                <Row>Author: {data?.post.author}</Row>
                                <Row>Created at: Sep 20, 2018</Row>
                            </Col>
                            <Col span={6}>
                                <TagSlug />
                            </Col>
                        </Row>
                        <Row>
                            <Text>{data?.post.body}</Text>
                        </Row>
                        <Row>
                            <Text style={{ color: "gray" }}>
                                {data?.comment.length} replies
                            </Text>
                        </Row>
                        <Divider />
                        <Row>
                            {data?.comment?.map((comment) => (
                                <Comments comment={comment} key={comment.id} />
                            ))}
                        </Row>
                    </Card>
                </>
            ) : (
                <Skeleton />
            )}
        </>
    );
};

export default PostDetail;
