import React from 'react'
import {Image, Button} from 'react-bootstrap'
import "./styles.scss"
import {REACT_APP_PUBLIC_FOLDER} from '../../constants/config'
import { useSelector } from 'react-redux'
function UserComment({data}) {
  return (
    <div className='comment-block'>
      <div className="avatar-container">
        <Image
        src={REACT_APP_PUBLIC_FOLDER+"/logo.png"}/>
      </div>
      <div className="comment-container">
        <div className="comment-infor">
          <span className="username">
            {data.name}
          </span>
          <span className="time">
            a day ago
          </span>
        </div>
        <div className="comment-content">
          {data.body}
        </div>
        <div
        className='reply-btn'
        >
          Reply to
        </div>
      </div>
    </div>
  )
}

export default UserComment