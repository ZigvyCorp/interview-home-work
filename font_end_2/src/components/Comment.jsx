import useFetcher from '../hooks/useFetcher';
import { Button } from 'antd';

const Comment = ({ postId }) => {
    const { data: comments } = useFetcher(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    return <Button type="primary">Primary Button</Button>;
};

export default Comment;
