import React from 'react'

export default function CommentItem(props) {
    let { cmt } = props;
  return (
      <div>
          <div className='d-flex justify-content-start align-items-center'>
              <img className='rounded-circle me-3' style={{ width: "50px", height: "50px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" alt="" />
              <h6>{cmt.owner_user.username}</h6>
              <p></p>
          </div>
          <div className='mt-2 ' style={{marginLeft: "62px"}}>
              {cmt.content}
          </div>
          <hr />
    </div>
  )
}
