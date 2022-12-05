import React from 'react'
import { useSelector } from 'react-redux';
import { Avatar, Button } from 'antd';

const Comment = ({ data }) => {
    const own = useSelector(state => state.user.userList.find(f => f.id === data.owner))
  console.log(data)
    let name = own.name.length > 0 ? own.name : own.username;
    let charName = name.split(' ').map(f => f.substring(0,1)).join('').toUpperCase()

  return (
    <div className='comment'>
        <div className="avatar">
          <Avatar
            style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
            size="large"
            gap={4}
          >
            {charName}
          </Avatar>
        </div>
          <div className="comment-body">
            <p className="info">
                <span className="username">{name}</span>
                  <span className="time">{(new Date(data.created_at)).toLocaleDateString()}</span>
            </p>
            <p className="message">
                  {data.content}
            </p>
            <span className="action">
                <Button type="link">
                    Reply
                </Button>
            </span>
          </div>
    </div>
  )
}

export default Comment