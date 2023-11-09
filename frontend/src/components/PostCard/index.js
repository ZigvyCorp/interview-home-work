import React from 'react';
import PostCardComment from './PostCardComment';
import { CommentOutlined } from '@ant-design/icons';
import { Card, Flex, Space, Typography, Tag, Button, Collapse } from 'antd';

const PostCard = () => {

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
                        children: <PostCardComment />,
                        showArrow: false
                    },
                ]}
            />
        ]}>
            <Typography.Title level={3} style={{ textAlign: 'center' }}>
                Card title
            </Typography.Title>
            <Flex justify='space-between' style={{ marginBottom: '20px' }}>
                <Space direction='vertical'>
                    <Typography.Text strong>
                        Author:
                    </Typography.Text>
                    <Typography.Text strong>
                        Created at:
                    </Typography.Text>
                </Space>
                <Space wrap style={{ maxWidth: '40%' }}>
                    <Tag color="success">success</Tag>
                    <Tag color="processing">processing</Tag>
                    <Tag color="error">error</Tag>
                    <Tag color="warning">warning</Tag>
                    <Tag color="default">default</Tag>
                </Space>
            </Flex>
            <Typography.Text strong>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo asperiores reprehenderit corporis mollitia illum. Deleniti dolor voluptas quam! Mollitia debitis delectus soluta optio molestiae numquam quae adipisci aspernatur voluptates dolorem. Obcaecati molestias modi ab totam corporis nam soluta dolores a? Sequi ea sed voluptas. Dolor fuga non quisquam labore ab rem repellendus explicabo natus aliquid! Delectus magnam doloremque optio distinctio in iste tenetur dolorem ut beatae perferendis, veritatis dolor cupiditate similique obcaecati! Veniam, porro? Vitae doloribus, exercitationem illo atque commodi ad at nemo velit necessitatibus possimus minus ipsum aperiam officia quibusdam neque adipisci ab culpa harum. Et neque error quis. Perspiciatis reiciendis commodi, labore blanditiis minima rerum nisi sed tempora?
            </Typography.Text>
        </Card>
    );
};

export default PostCard;