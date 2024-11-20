import { useLocation } from "react-router-dom"
import { Collapse, Tag } from 'antd'
import { useSelector } from "react-redux"
import { state as commentState } from "../../reducer/CommentSlice"
import { state as userState } from "../../reducer/UserSlice"
import Comment from "../post/Comment"
import './PostDetailPage.css'

export default function PostDetailPage() {
    const post = useLocation().state
    const comments = useSelector(commentState)
    const user = useSelector(userState)

    return (
        <div id="postDetailPage">
            <h1 className='title'>{ post.title }</h1>
            <div className='content'>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '50%' }}>
                        <p>Author: { user.name }</p>
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
                <p>{ post.body}</p>
            </div>
            <div className='commentSection'>
                <Collapse items={[{ key: '1', label: comments.length + ' replies', children: comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                )) , showArrow: false }]} bordered={false}  />
                <hr />
            </div>
        </div>
    )
}