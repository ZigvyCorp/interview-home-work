import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import Post from "../post/Post"
import { state } from "../../reducer/PostSlice"
import { state as userState } from '../../reducer/UserSlice'


export default function Blog() {
    const dispatch = useDispatch()
    const posts = useSelector(state)
    const author = useSelector(userState)
    const [result, setResult] = useState([])

    // useEffect(() => {
    //     posts.forEach(post => {
    //         prepareComponent(post)
    //     })
    // }, [posts])

    function* prepareComponent(post) {
        console.log('hey')
        dispatch({ type: 'request_user', payload: post.userId })
        result.push(<Post key={post.id} post={post} author={author} />)
        setResult(result)
    }

    return (
        <div id="blog">
            { posts.map((post) => (
                <Post key={post.id} post={post} author={{ name: 'sang' }} />
            ))}
        </div>
    )
}