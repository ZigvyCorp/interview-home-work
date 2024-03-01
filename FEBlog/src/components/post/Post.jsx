import './Post.scss'
import avatar from '../../assets/avatar2.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Post = ({ title, content, userId, postId, index, length }) => {

    const [user, setUser] = useState({})
    const [comments, setComments] = useState([])
    const [flag, setFlag] = useState(false)

    const getData = async () => {
        const res1 = await axios.get('https://jsonplaceholder.typicode.com/users')
        const res2 = await axios.get('https://jsonplaceholder.typicode.com/comments')
        
        res1.data.forEach((u) => {    
            if(u.id === userId) {
                setUser(u)
            }
        })

        res2.data.forEach((c) => {
            if(c.postId === postId) {
                comments.push(c)
                setComments([...comments, c])
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])
    
    // console.log(comments)

    return (
        <div className='post-wrapper' 
            style={{borderBottom: `${index == length - 1 ? 'none' : '3px'}`, borderBottomColor: `${index == length - 1 ? '#fff' : '#000'}`, borderBottomStyle: `${index == length - 1 ? 'none' : 'solid'}`}}
        >
            <h2>{title}</h2>
            <div className="post-info-wrapper">
                <div className="post-info">
                    <p>Author: {user.name}</p>
                    <p>Creared at: Sep 20, 2018</p>
                </div>
                <div className="colors-wrapper">
                    <div className="color-line">
                        <p className='magenta'>magenta</p>
                        <p className='red'>red</p>
                        <p className='volcano'>volcano</p>
                        <p className='orange'>orange</p>
                        <p className='gold'>gold</p>
                    </div>
                    <div className="color-line">
                        <p className='lime'>lime</p>
                        <p className='green'>green</p>
                        <p className='cyan'>cyan</p>
                        <p className='blue'>blue</p>
                        <p className='geekblue'>geekblue</p>
                    </div>
                    <div className="color-line">
                        <p className='purple'>purple</p>
                    </div>
                </div>
            </div>
            <p className='post-content'>{content.slice(0, 101)}</p>
            <div className="comments-wrapper">
                <p className='comment-quantity' onClick={() => setFlag(!flag)}>{comments.length} replies</p>
                <hr />
                <div className="list-comments-wrapper" style={{display: `${flag ? 'flex' : 'none'}`}}>
                    {
                        comments.map((c) => {
                            return (
                                <div className="comment-wrapper" key={c.id}>
                                    <img src={avatar} alt="user-avatar" />
                                    <div className="comment-info">
                                        <p className='ci-user'>No name <span>a days ago</span></p>
                                        <p className='comment-content'>{c.body}</p>
                                        <p>Reply to</p>
                                    </div>
                                </div>  
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Post
