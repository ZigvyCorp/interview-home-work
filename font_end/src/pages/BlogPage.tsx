import { Card, List, Divider, Empty } from 'antd';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';
import { selectUserById } from '../features/users/usersSlice';
import { selectPostById } from '../features/posts/postsSlice';
import CommentsList from '../components/CommentsList';
import {
    type Comment,
    selectCommentsByPostId,
} from '../features/comments/commentsSlice';

const BlogPage = () => {
    const { id } = useParams();

    const post = useAppSelector((state) => selectPostById(state, id!));
    const user = useAppSelector((state) => selectUserById(state, post.owner));
    const comments = useAppSelector((state) =>
        selectCommentsByPostId(state, id)
    );

    return (
        <Card className="mt-10 dark:bg-neutral-900 dark:text-neutral-300 border-0 px-20">
            <h1 className="text-center capitalize text-3xl">{post.title}</h1>
            <div className="flex justify-between">
                <p className="font-bold">
                    Author:
                    <span className="font-normal text-base ml-1">
                        {user.username}
                    </span>
                </p>
                <p className="font-bold">
                    Create at:
                    <span className="font-normal text-base ml-1">
                        {new Date(post.created_at).toLocaleDateString('en-GB')}
                    </span>
                </p>
            </div>
            <p className="text-lg mt-4 text-justify">{post.content}</p>
            <Divider />
            <div className="text-xl font-semibold">
                Comments( {comments.length} )
            </div>
            <List
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={(item: Comment) => <CommentsList item={item} />}
                locale={{
                    emptyText: (
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description={
                                <p className="dark:text-white">No comment</p>
                            }
                        />
                    ),
                }}
            />
        </Card>
    );
};

export default BlogPage;
