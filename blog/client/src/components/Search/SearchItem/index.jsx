import React from 'react'
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function SearchItem({data,onClose}) {
    const navigate = useNavigate();
    const {users} = useSelector(state => state.posts)
    const user = users?.filter((user)=> user.id === data?.userId)[0]
  return (
    <Card onClick={()=> {
        navigate(`/posts/${data.id}`);
        onClose&&onClose()
    }}>
        <Card.Body>
            <Card.Title>
                {data.title}
            </Card.Title>
            <div className="post-infor">
                <span className="username">
                    {user?.name}
                </span>
                <span className="time">
                    a day ago
                </span>
            </div>
            <Card.Text style={{fontSize:12}}>
                {data.body?.substring(0,100) + "..."}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
SearchItem.propTypes = {
    data:PropTypes.object
  }

export default SearchItem