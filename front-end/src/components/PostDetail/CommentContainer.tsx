import { Collapse, CollapseProps } from 'antd';
import React from 'react';
import AllComments from './AllComments';
import { CommentResponse } from '../../interfaces/response/CommentResponse';

interface CommentProps {
    comments: CommentResponse[];
}

const CommentContainer: React.FC<CommentProps> = (props) => {

    const { comments } = props;


    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <Label total={comments.length}/>,
            children: <AllComments comments={comments} />,
            showArrow: false,
        },
    ];

    return (
        <Collapse items={items} ghost className='py-2 mt-4' />
    )
}

const Label = ({ total }: { total: number }) => {
    
    const getTotalCommentRender = (total: number): string => {
        if (total <= 1) {
            return `${total} comment`
        }
        return `${total} comments`
    }

    return (
        <div className='flex justify-between'>
            <span className='font-semibold text-gray-500 cursor-pointer hover:text-primary'>{getTotalCommentRender(total)}</span>
            <span className='font-semibold hover:text-primary'>More</span>
        </div>
    )
}

export default CommentContainer