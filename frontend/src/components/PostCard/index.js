import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CommentOutlined } from '@ant-design/icons';
import { Card, Flex, Space, Typography, Tag, Button, Collapse } from 'antd';

import { COLORS } from '../../config';
import { getRandom } from '../../utils/random';
import { shortedString } from '../../utils/formatString';
import PostCardCommentSection from './PostCardCommentSection';
import { getCommentByPost } from '../../store/comment/action';

const PostCard = ({ post }) => {

    const { title, content, owner, tags, created_at, _id, comments_count } = post;
    const [isFetch, setIsFetch] = useState(false);
    const dispatch = useDispatch();

    const handleChange = () => {
        if (!isFetch) {
            return dispatch(getCommentByPost(_id));
        }
        setIsFetch(true);
    };

    return (
        <Card actions={[
            <Collapse
                ghost
                onChange={handleChange}
                items={[
                    {
                        key: 'comments',
                        showArrow: false,
                        label: <Button type="text" >
                            <Typography.Text strong>{comments_count}</Typography.Text>
                            <CommentOutlined />
                        </Button>,
                        children: <PostCardCommentSection postId={_id} />,
                    },
                ]}
            />
        ]}>
            <Typography.Title level={3} style={{ textAlign: 'center' }}>
                {title}
            </Typography.Title>
            <Flex justify='space-between' style={{ marginBottom: '20px' }}>
                <Space direction='vertical'>
                    <Typography.Text strong>
                        Author: {owner.name}
                    </Typography.Text>
                    <Typography.Text strong>
                        Created at: {dayjs(created_at).format('DD-MM-YYYY')}
                    </Typography.Text>
                </Space>
                <Space wrap style={{ maxWidth: '40%' }}>
                    {
                        tags?.map((tag, index) => {
                            return <Tag key={index} color={COLORS[getRandom(COLORS.length)]}>
                                {tag}
                            </Tag>;
                        })
                    }
                </Space>
            </Flex>
            <Typography.Text strong>
                {shortedString(content, 100)}
            </Typography.Text>
        </Card>
    );
};

export default PostCard;