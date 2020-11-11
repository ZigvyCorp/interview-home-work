import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Post = ({userName, title, body}) => {

  const today = moment().format('MMM DD, YYYY');

  const content = () => {
    let result
    let bodySplitted = body.split('')

    if(bodySplitted.length < 100){
      result = body
    } else {
      result = bodySplitted.slice(0, 100).join('') + "..."
    }
    return result
  }

  return (
    <div className='container d-flex flex-column border-bottom justify-content-center align-items-start pb-4'>
      <h1 className='align-self-center mt-4'>{title}</h1>
      <div className='my-4'>
        <div><b>Author:</b> {userName}</div>
        <div><b>Created at:</b> {today}</div>
      </div>
      <div className='mb-4'>{content()}</div>
      <div>Replies section</div>
    </div>
  )
}

Post.propTypes = {
  userName: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default Post