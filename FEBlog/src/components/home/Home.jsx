import './Home.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import avatar from '../../assets/avatar.png'
import Post from '../post/Post'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

    const [posts, setPosts] = useState([])

    const getData = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(res.data)
    }
    
    useEffect(() => {
        getData()
    }, [])
    
    console.log(posts)

    return (
        <div className='home-wrapper'>
            <div className="header-wrapper">
                <div className="logo-wrapper">
                    <div className='block'></div>
                    <a href="/">Logo</a>
                </div>
                <p className='blog-title' ><span>Blogs</span></p>
                <div className="user-wrapper" >
                    <img src={avatar} alt="user-avatar" />
                    <p>Adam Levine</p>
                </div>
            </div>
            <div className="posts-wrapper">
                <div className="triangle"></div>
                <div className="small-triangle"></div>
                {
                    posts.map((p, index) => {
                        return (
                            <Post key={p.id} title={p.title} content={p.body} userId={p.userId} postId={p.id} index={index} length={posts.length} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home
