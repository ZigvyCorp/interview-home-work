import React from 'react';

import { Flex, Avatar, Space, Typography } from 'antd';

const PostCardComment = () => {
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

export default PostCardComment;