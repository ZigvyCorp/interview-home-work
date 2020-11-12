import React from 'react'
import PropTypes from 'prop-types'

const Reply = ({isVisible, toggleThread}) => {

  const dummdyData = [{email: 'user_email@gmail.com', reply: 'Something of content', createdAt:'1 day ago'}]
  
  const renderThread = (data) => {
    return data.map(({email, createdAt, reply}, index) => 
      <div className='mb-2' key={index}>
        <div>
          <span>{email}</span>
          <span className='ml-4 text-muted font-weight-bold font-italic'>{createdAt}</span>
        </div>
        <div>{reply}</div>
        <div>Reply to </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <div
        className=''
        style={{cursor:'pointer'}} 
        onClick={() => toggleThread()}>
        <b>Replies section </b>
      </div>
      { isVisible 
        ? renderThread(dummdyData)
        : null
      }
    </div>
  )
}

Reply.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleThread: PropTypes.func.isRequired
}


export default Reply