import React, { useState } from 'react'
import { Collapse } from 'antd';
import CommentList from './CommentList';
import { useDispatch } from 'react-redux';
import { getComment } from '../../redux/actions/commentActions';

const CommentBlock = ({ postId, commentCount } : { postId: number, commentCount: number}) => {
    const dispatch = useDispatch()

    const [isFetch, setIsFetch] = useState(false);

    const handleChange = () => {
        if (!isFetch) {
            return dispatch(getComment(postId))
        }
        setIsFetch(true);
    };

    return (
        <div className='mt-4'>
            <Collapse
                onChange={handleChange}
                expandIconPosition='end'
                collapsible="header"
                items={[
                    {
                        key: '1',
                        label: `${commentCount} replies`,
                        children: <CommentList postId={postId}/>,
                    },
                ]}
            />
        </div>
    )
}

export default CommentBlock