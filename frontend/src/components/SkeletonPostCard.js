import React from 'react';
import { Skeleton } from 'antd';

const SkeletonPostCard = () => {
    return (
        <Skeleton
            avatar
            paragraph={{ rows: 10 }}
        />
    );
};

export default SkeletonPostCard;