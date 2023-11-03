import { Collapse, CollapseProps } from 'antd'
import React from 'react'
import AllComments from './AllComments'
import { CommentResponse } from '../../../interfaces/response/CommentResponse'

interface CommentProps {
    comments: CommentResponse[];
}

const CommentContainer: React.FC<CommentProps> = (props) => {

    const { comments = [] } = props;

    const getTotalCommentRender = (total: number): string => {
        if (total <= 1) {
            return `${total} reply`
        }
        return `${total} replies`
    }

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: <span className='font-semibold text-gray-500 cursor-pointer hover:text-primary'>{getTotalCommentRender(comments.length)}</span>,
    children: <AllComments comments={comments}/>,
    showArrow: false,
  },
];
    return (
        <Collapse items={!comments.isEmpty() ? items : []} ghost className='py-2'/>
    )
}

export default CommentContainer