import { Button, Divider, Flex, Typography } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetailPage() {
    const { id } = useParams();
    const [commentPage, setCommentPage] = useState(1);

    const handleLoadMoreComments = () => {
        setCommentPage((prev) => prev + 1);
    };

    return (
        <div>
            post {id}
        </div>
    );
}