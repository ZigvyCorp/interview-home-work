import React from 'react';
import { Card, Flex, Space, Typography, Tag, Button, Collapse, Avatar } from 'antd';
import { CommentOutlined } from '@ant-design/icons';


const PostCard = () => {

    const RenderComments = () => {
        return (
            <Flex vertical gap="large">
                <Flex gap="large">
                    <Avatar size="large" src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                    <Space direction='vertical' align='start'>
                        <Space size='large'>
                            <Typography.Text type='secondary' strong>Name</Typography.Text>
                            <Typography.Text type='secondary'>Date</Typography.Text>
                        </Space>
                        <Typography.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cumque.
                        </Typography.Text>
                    </Space>
                </Flex>
                <Flex gap="large">
                    <Avatar size="large" src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                    <Space direction='vertical' align='start'>
                        <Space size='large'>
                            <Typography.Text type='secondary' strong>Name</Typography.Text>
                            <Typography.Text type='secondary'>Date</Typography.Text>
                        </Space>
                        <Typography.Text>lorem10</Typography.Text>
                    </Space>
                </Flex>
            </Flex>

        );
    };
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
                        children: <RenderComments />,
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