import { Button, Divider, Flex, Typography } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentTagList from '~/components/CommentTagList/CommentTagList';
import CommentList from '~/features/comments/components/CommentList/CommentList';
import useComment from '~/features/comments/hooks/useComment';
import usePost from '~/features/posts/hooks/usePost';

export default function PostDetailPage() {
    const { id } = useParams();
    const [commentPage, setCommentPage] = useState(1);
    const { selectedPost, postStatus } = usePost({ selectedID: parseInt(id!) });
    const { commentList, hasNextPage } = useComment({
        page: commentPage,
        postID: parseInt(id!),
        isFetch: true,
    });

    const handleLoadMoreComments = () => {
        setCommentPage((prev) => prev + 1);
    };

    return (
        <>
            {postStatus === 'success' && selectedPost ? (
                <Flex vertical style={{ padding: '20px', borderBottom: '5px solid black' }}>
                    <Typography.Title style={{ textAlign: 'center' }}>
                        {selectedPost.title}
                    </Typography.Title>
                    <Flex vertical={false} align='center' justify='space-between'>
                        <Flex vertical flex='0.7'>
                            <Typography.Text style={{ fontSize: '22px' }}>
                                Author: {selectedPost.userDetail.name}
                            </Typography.Text>
                            <Typography.Text style={{ fontSize: '22px' }}>
                                Created at: {selectedPost.createdDate}
                            </Typography.Text>
                        </Flex>
                        <Flex wrap='wrap' gap='small' flex='0.3'>
                            <CommentTagList />
                        </Flex>
                    </Flex>
                    <Typography.Text
                        style={{ paddingTop: '20px', paddingBottom: '40px', fontSize: '20px' }}
                    >
                        {selectedPost.body}
                    </Typography.Text>
                    {selectedPost.totalComments !== 0 && (
                        <Typography.Text style={{ color: '#a9a9a9', cursor: 'pointer' }} strong>
                            {selectedPost.totalComments} replies
                        </Typography.Text>
                    )}
                    <Divider />
                    <CommentList commentList={commentList} commentStatus='test' />
                    {hasNextPage ? (
                        <Button onClick={handleLoadMoreComments}>Load more</Button>
                    ) : null}
                </Flex>
            ) : (
                <h1>Loading</h1>
            )}
        </>
    );
}
