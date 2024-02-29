import React, { useState } from 'react';
import { Card, Typography, Flex, Divider, Button } from 'antd';

import { getSummaryContent } from '../../../../utils/getSummaryContent';
import { formatDateType1 } from '../../../../utils/formatDate';
import CommentList from '../../../Comments/Components/CommentList/CommentList';
import { NavLink } from 'react-router-dom';
const { Title } = Typography;

const PostItem = ({ data }) => {

    const [openCommentSection, setOpenCommentSection] = useState(false);
    const toggleCommentSection = () => {
        if (openCommentSection) setOpenCommentSection(false);
        else {
            setOpenCommentSection(true)
        }
    }
    const listColor = ["danger", "primary", "ghost"]
    return (
        <Card
            hoverable
            style={{ marginBottom: "20px" }}

        >
            <NavLink to={`/post/${data.id}`} >
                <Title level={3} style={{ marginTop: "0px", textAlign: 'center' }}>{data.title}</Title>
                <p style={{ color: "black" }}>{getSummaryContent(data.content)}</p>
            </NavLink>
            <div style={{
                textAlign: "left",
            }}>
                <Flex justify="space-between" >
                    <div style={{ color: "gray", fontStyle: "italic" }}>
                        <p style={{ margin: 0 }}>Author: {data.author}</p>
                        <p style={{ margin: 0 }}>Created at: {formatDateType1(data.created_at)}</p>
                    </div>
                    <div>
                        {data.tags.map((tag, index) => <Button key={index} type="dashed" danger style={{ marginRight: 5 }}>{tag}</Button>)}
                    </div>
                </Flex>
            </div>
            <div style={{
                textAlign: "left",
            }}>
                <p
                    style={{
                        border: "#f3f3f3 1px solid",
                        padding: "6px 10px",
                        backgroundColor: "#f3f3f3",
                        borderRadius: "3px",
                        fontWeight: "bold",
                        color: "gray"
                    }}
                    onClick={toggleCommentSection}
                >{data?.totalComments} replies</p>
                <Divider></Divider>
                {
                    openCommentSection &&
                    <Flex gap={20} vertical>
                        <CommentList postId={data?.id} />
                    </Flex>
                }

            </div>

        </Card>
    );
};



export default PostItem;