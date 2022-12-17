import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
const CommentItem = ({data}) => {
    const own = useSelector(state => state.UserReducer.userList.find(f => f.id === data.owner))
      let name =  own?.name  || '';
    return (
        <div className='d-flex gap-4'>
            <img className='img-container mt-2' src="https://images.unsplash.com/photo-1667322469634-b4cd96067b5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <div className='card-right'>
                <div className='d-flex gap-2'>
                    <h4 className='mb-0 text-secondary'>{name}</h4>
                    <span className='fs-5 fw-lighter text-secondary'>{moment((new Date(data.created_at)).toLocaleDateString()).startOf('day').fromNow()}</span>
                </div>
                <p className='mt-0 mb-0'>{data.content}</p>
                <span className='fs-5 text-secondary'>Reply to</span>
            </div>
        </div>
    );
};

export default CommentItem;