import React, { useState, useEffect } from 'react';
import { Card, Typography, Flex, Divider, Button } from 'antd';

import { NavLink, useParams } from 'react-router-dom';
import { formatDateType1 } from '../../utils/formatDate';
import { getSummaryContent } from '../../utils/getSummaryContent';
import { fetchPostByIdRequest } from './Services/postAction'
import { connect } from 'react-redux';
const { Title } = Typography;

const PostDetail = ({ loading, post, error, fetchPost }) => {
    const { id } = useParams();
    useEffect(() => {
        fetchPost(id);
    }, [id, fetchPost]);

    return (

        <>
            <Title level={1} style={{ marginTop: "0px", textAlign: 'center' }}>{post.title}</Title>
            <Title level={5} style={{ marginTop: "0px", textAlign: 'left', backgroundColor: "#e4e4e4", borderRadius: 10, padding: "10px 20px" }}>{getSummaryContent(post.content)}</Title>
            <p style={{ color: "black" }}>{post.content}</p>

            <div style={{
                textAlign: "left",
            }}>
                <Flex justify="space-between" >
                    <div style={{ color: "gray", fontStyle: "italic" }}>
                        <p style={{ margin: 0 }}>Author: {post.author}</p>
                        <p style={{ margin: 0 }}>Created at: {formatDateType1(post.created_at)}</p>
                    </div>
                    <div>
                        {post.tags?.map((tag, index) => <Button key={index} type="dashed" danger style={{ marginRight: 5 }}>{tag}</Button>)}
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
                >{post?.totalComments} replies</p>
            </div>

        </>
    );
};



const mapStateToProps = (state) => ({
    loading: state.postDetail.loading,
    post: state.postDetail.data,
    error: state.postDetail.error
});

const mapDispatchToProps = {
    fetchPost: fetchPostByIdRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);