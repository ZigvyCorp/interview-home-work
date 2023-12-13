import useFetcher from '../hooks/useFetcher';
import { Collapse, Button } from 'antd';
import CommentList from './CommentList';

const CommentSection = ({ postId, postDate }) => {
    const { data: comments } = useFetcher(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    return (
        <Collapse
            collapsible="icon"
            accordion
            ghost
            expandIcon={() => <Button>{comments?.length + ' replies'}</Button>}
            items={[
                {
                    children: (
                        <CommentList comments={comments} postDate={postDate} />
                    ),
                },
            ]}
        />
    );
};

export default CommentSection;
