import React from 'react';
import dayjs from 'dayjs';
import PostCardComment from './PostCardComment';
import { CommentOutlined } from '@ant-design/icons';
import { Card, Flex, Space, Typography, Tag, Button, Collapse } from 'antd';
import { shortedString } from '../../utils/formatString';
import { COLORS } from '../../config';
import { getRandom } from '../../utils/random';

const PostCard = ({ post }) => {
    const { title, content, owner, tags, created_at, _id } = post;
    return (
        <Card actions={[
            <Collapse
                ghost
                items={[
                    {
                        key: 'comments',
                        label: <Button type="text">
                            <Typography.Text strong>4</Typography.Text>
                            <CommentOutlined />
                        </Button>,
                        children: <PostCardComment postid={_id} />,
                        showArrow: false
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