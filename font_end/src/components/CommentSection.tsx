import { Button, Collapse, Empty, List } from 'antd';

import { useAppSelector } from '../app/hooks';
import {
    type Comment,
    selectCommentsByPostId,
} from '../features/comments/commentsSlice';
import CommentsList from './CommentsList';

const CommentSection = ({ postId }: { postId: string }) => {
    const comments = useAppSelector((state) =>
        selectCommentsByPostId(state, postId)
    );
    return (
        <Collapse
            collapsible="icon"
            accordion
            ghost
            expandIcon={() => (
                <Button style={{ color: '#1677ff', fontSize: 14 }}>
                    {comments?.length + ' replies'}
                </Button>
            )}
            items={[
                {
                    children: (
                        <List
                            itemLayout="horizontal"
                            dataSource={comments}
                            renderItem={(item: Comment) => (
                                <CommentsList item={item} />
                            )}
                            locale={{
                                emptyText: (
                                    <Empty
                                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                                        description={
                                            <p className="dark:text-white">
                                                No comment
                                            </p>
                                        }
                                    />
                                ),
                            }}
                        />
                    ),
                },
            ]}
        />
    );
};
export default CommentSection;
