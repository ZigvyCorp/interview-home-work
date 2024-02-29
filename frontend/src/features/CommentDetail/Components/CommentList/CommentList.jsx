import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { fetchCommentsRequest } from '../../../Comments/Services/commentAction';
import CommentItem from '../../../Comments/Components/CommentItem/CommentItem';

function CommentList({ loading, comments, hasNextPage, error, fetchComments }) {
    const { id } = useParams();
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchComments(id, page);
    }, [page, id, fetchComments]);

    const handleLoadMoreComment = () => {
        if (hasNextPage) {
            setPage(page + 1)
        }
    }

    return (
        <div style={{
            padding: "0px 25px"
        }}>
            {
                comments?.length > 0 && comments ? comments?.map((comment, index) => (
                    <CommentItem key={index} data={comment} />
                )) : null
            }
            {
                hasNextPage &&
                <Flex justify='center' style={{ marginTop: 10 }}>
                    {
                        loading ?
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
    loading: state.cmtPostDetail.loading,
    comments: state.cmtPostDetail.data,
    error: state.cmtPostDetail.error,
    hasNextPage: state.cmtPostDetail.hasNextPage
});

const mapDispatchToProps = {
    fetchComments: fetchCommentsRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(CommentList);