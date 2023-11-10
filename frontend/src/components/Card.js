import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Card, Divider, Avatar, Flex, Row, Col, Tag, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsAction } from '../store/actions'
const PostCard = ({ post }) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const comments = useSelector((state) => state.comments)

    const { Text } = Typography;
    useEffect(() => {
        dispatch(fetchCommentsAction(post.id));
    }, [dispatch]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const onChange = (checked) => {
        setLoading(!checked);
    };
    return (
        <Card className="" style={{borderBottom: '1px solid black'}}>
            <h1 style={{ textAlign: "center", marginBottom: "25px" }}>{post.title}</h1>
            <Row>
                <Col span={16}>
                    <p>Author: Smith</p>
                    <p>Created at: Sept 20, 2018</p>
                </Col>
                <Col span={8}>
                    <Flex wrap="wrap" gap="small">
                        {Array.from(
                            {
                                length: 11,
                            },
                            (_, i) => (
                                <Tag key={i} color="magenta">magenta</Tag>
                            ),
                        )}
                    </Flex>
                </Col>
            </Row>
            <p>{post.body}</p>
            <div style={{marginTop: 25}} onClick={toggleExpand}>
                <Text>{comments.length} replies</Text>
                <Divider />
                {isExpanded &&
                    comments.map((comment) => (
                        <Card
                            style={{ border: 'none' }}
                            loading={loading}
                        >
                            <Flex >
                                <Avatar
                                    style={{ marginRight: 15, width: 40, marginTop: 15 }} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                <Flex vertical justify="flex-start">
                                    <Text type="secondary"> {comment.name} <Text disabled> a day ago </Text></Text>
                                    <Text>
                                        {comment.body}
                                    </Text>
                                    
                                    <p>Reply to</p>
                                </Flex>
                            </Flex>
                        </Card>
                    ))
                }
            </div>
        </Card>
    )
};
export default PostCard;

PostCard.propTypes = {
    post: PropTypes.object
}