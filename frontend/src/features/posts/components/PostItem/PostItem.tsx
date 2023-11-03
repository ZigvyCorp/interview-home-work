import { Button, Divider, Flex, Typography } from 'antd';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import CommentTagList from '~/components/CommentTagList/CommentTagList';
import CommentList from '~/features/comments/components/CommentList/CommentList';
import useComment from '~/features/comments/hooks/useComment';
import { Post } from '../../models/post';

type Props = {
    postItem: Post;
};

const PostItem = memo(function PostItem({ postItem }: Props) {
    const { userDetail, createdDate, title, body, totalComments, id } = postItem;
    const [openComment, setOpenComment] = useState(false);
    const [commentPage, setCommentPage] = useState(1);
    const [isFetchComments, setIsFetchComments] = useState(false);
    const { commentList, hasNextPage } = useComment({
        page: commentPage,
        postID: id,
        isFetch: isFetchComments,
    });

    const handleToggleCommentSection = () => {
        if (openComment) return setOpenComment(false);

        setIsFetchComments(true);
        setOpenComment(true);
    };

    const handleLoadMoreComments = () => {
        setCommentPage((prev) => prev + 1);
    };

    return (
        <Flex vertical style={{ padding: '20px', borderBottom: '5px solid black' }}>
            <Link to={`/posts/${id}`}>
                <Typography.Title style={{ textAlign: 'center' }}>{title}</Typography.Title>
            </Link>
            <Flex vertical={false} align='center' justify='space-between'>
                <Flex vertical flex='0.7'>
                    <Typography.Text style={{ fontSize: '22px' }}>
                        Author: {userDetail.name}
                    </Typography.Text>
                    <Typography.Text style={{ fontSize: '22px' }}>
                        Created at: {createdDate}
                    </Typography.Text>
                </Flex>
                <Flex wrap='wrap' gap='small' flex='0.3'>
                    <CommentTagList />
                </Flex>
            </Flex>
            <Typography.Text
                style={{ paddingTop: '20px', paddingBottom: '40px', fontSize: '20px' }}
            >
                {body}
            </Typography.Text>
            {totalComments !== 0 && (
                <Typography.Text
                    style={{ color: '#a9a9a9', cursor: 'pointer' }}
                    strong
                    onClick={handleToggleCommentSection}
                >
                    {totalComments} replies
                </Typography.Text>
            )}
            <Divider />
            {openComment && (
                <>
                    <CommentList commentList={commentList} commentStatus='test' />
                    {hasNextPage ? (
                        <Button onClick={handleLoadMoreComments}>Load more</Button>
                    ) : null}
                </>
            )}
        </Flex>
    );
});

export default PostItem;
