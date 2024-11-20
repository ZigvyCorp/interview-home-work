import { Collapse, Tag } from 'antd'
import { state } from "../../reducer/UserSlice"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './post.css'
import Comment from './Comment'


function Post({post, author}) {
    // const author = useSelector(state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // useEffect(() => {
    //     dispatch({ type: 'request_user', payload: post.userId })
    // }, [])
    function handlePostClick() {
        dispatch({ type: 'request_comment', payload: post.id })
        dispatch({ type: 'request_user', payload: post.userId })
        navigate('/post-detail', {state: post})
    }

    return (
        <div className="post" onClick={ handlePostClick }>
            <h1 className='title'>{ post.title }</h1>
            <div className='content'>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '50%' }}>
                        <p>Author: { author.name }</p>
                        <p>Create at: March 01, 1998</p>
                    </div>
                    <div style={{ width: '50%', textAlign: 'right' }}>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="geekblue">geekblue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div>
                </div>
                <br />
                <p>{ post.body.substring(0, 100).concat('...') }</p>
            </div>
            <div className='commentSection'>
                <Collapse items={[{ key: '1', label: '2 replies', children: <><Comment /><Comment /></> , showArrow: false }]} bordered={false}  />
                <hr />
            </div>
        </div>
    )
}

export default Post