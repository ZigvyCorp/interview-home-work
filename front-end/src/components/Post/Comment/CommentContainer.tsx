import { Collapse, CollapseProps } from 'antd';
import React from 'react';
import AllComments from './AllComments';
import { PostResponse } from '../../../interfaces/response/PostResponse';

interface CommentProps {
    post: PostResponse;
}

const CommentContainer: React.FC<CommentProps> = (props) => {

    const { post } = props;

    const getTotalCommentRender = (total: number): string => {
        if (total <= 1) {
            return `${total} reply`
        }
        return `${total} replies`
    }

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <span className='font-semibold text-gray-500 cursor-pointer hover:text-primary'>{getTotalCommentRender(post.totalComments)}</span>,
            children: <AllComments postId={post.id} />,
            showArrow: false,
        },
    ];

    return (
        <Collapse items={items} ghost className='py-2' />
    )
}

export default CommentContainer