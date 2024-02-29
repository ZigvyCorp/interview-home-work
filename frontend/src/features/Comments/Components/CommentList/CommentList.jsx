import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCommentsRequest } from '../../Services/commentAction';
import CommentItem from '../CommentItem/CommentItem';
import { Button, Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function CommentList({ commentState, fetchComments, postId }) {
    const commentData = commentState[postId] || [];
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchComments(postId, page);
    }, [page, postId, fetchComments]);
    const handleLoadMoreComment = () => {
        if (commentData.hasNextPage) setPage(page + 1)
    }

    return (
        <div style={{
            padding: "0px 25px"
        }}>
            {
                commentData?.data?.length > 0 && commentData?.data ? commentData?.data?.map((comment, index) => (
                    <CommentItem key={index} data={comment} />
                )) : null
            }
            {
                commentData.hasNextPage &&
                <Flex justify='center' style={{ marginTop: 10 }}>
                    {
                        commentData.loading ?
                            <Spin indicator={
                                <LoadingOutlined style={{
                                    fontSize: 24,
                                }} spin />
                            } /> :
                            <Button type='text' onClick={handleLoadMoreComment}  >Load more</Button>
                    }
                </Flex>
            }

        </div>
    );
}

const mapStateToProps = (state) => ({
    commentState: state.comments
});

const mapDispatchToProps = {
    fetchComments: fetchCommentsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);