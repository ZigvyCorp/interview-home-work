import React, { useEffect } from 'react'
import PostSection from '../containers/PostSection'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'


const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getPosts())
    }, [dispatch])
    return (
        <div className='home-container'>
            <PostSection />
        </div>
    )
}

export default Home