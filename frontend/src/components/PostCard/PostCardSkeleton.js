
import React from 'react';
import { Skeleton, Card } from 'antd';

const PostCardSkeleton = () => {
    return (
        <Card>
            <Skeleton avatar paragraph={{ rows: 6 }} />
        </Card>
    );
};

export default PostCardSkeleton;