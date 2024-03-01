import React from 'react'
import { useSelector } from 'react-redux'
import './PostAuthor.css'
import formatDate from '../../utils/formatDate'
import PostTag from '../PostTag'

export const PostAuthor = ({ userId, createdAt }) => {
    const { users } = useSelector(state => state.user)

    return (
        <div className='post-infor'>
            <div className='author-infor'>
                <p>{users?.find(user => user.id === userId).name}</p>
                <p>{`Created at: ${formatDate(createdAt)}`}</p>
            </div>
            <div className='post-tags'>
                <PostTag />
            </div>
        </div>

    )
}
