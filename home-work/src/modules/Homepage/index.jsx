import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import * as homepageConstants from 'redux/constants/homepageConstants';
import { useDispatch } from 'react-redux'


const Homepage = memo(() => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClickTest = () => {
    dispatch({
      type: homepageConstants.TEST,
      payload: [4,5,6],
    })
  }

  return (
    <>
      <div onClick={handleClickTest}>HomePage</div>
    </>
  )
})

export default Homepage