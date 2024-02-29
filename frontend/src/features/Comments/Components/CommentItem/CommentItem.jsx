import React from 'react';
import { Divider, Card, Avatar, Flex, Space, Button } from 'antd';
import { formatDateType2 } from '../../../../utils/formatDate';


const CommentItem = ({ data }) => {
    return (
        <div>

            <Space style={{ alignItems: "start" }}>
                <Avatar size="large" gap={3} src={"https://api.dicebear.com/7.x/miniavs/svg?seed=2"} />
                <div>
                    <p style={{ marginBottom: 0, color: "#616161" }}>{data?.userName || "Anonymous"} - <span style={{ color: "darkgrey" }} >{formatDateType2(data.created_at)}</span></p>
                    <p style={{ fontSize: "16px", marginBottom: 0 }}>{data?.content}</p>
                    <p style={{ color: "gray" }}>Reply to</p>
                </div>
            </Space>
            <Divider style={{ margin: 0 }}  >
            </Divider>
        </div>
    );
};



export default CommentItem;