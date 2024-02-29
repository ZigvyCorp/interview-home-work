import React from 'react'
import { Card, Row, Col, Collapse, Button } from 'antd'
import Comment from './Comment'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { selectAllPost } from '../features/posts/postsSlice'
import { selectCommets } from '../features/comments/commentsSlice'
import { selectAllUser } from '../features/users/usersSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setPostId } from '../app/action/actionCreator'
import { IPost } from '../type/IPost'
import { IComment } from '../type/IComment'
import { IUser } from '../type/IUser'
export default function DetailPage()
{
    const dispatch=useDispatch()
    const{postId}=useParams()
    const posts:IPost[]=useSelector(selectAllPost)
    const [postById, setPostById]=React.useState<IPost|undefined>({} as IPost)
    const users:IUser[]=useSelector(selectAllUser)
    const comments:IComment[]=useSelector(selectCommets)
    const [commentByPostId, setCommentByPostId]=React.useState<IComment[]>([] as IComment[])
    React.useEffect(()=>{
        setPostById(posts.find(post=>post.id===Number(postId)))
        dispatch(setPostId(Number(postId)))
    },[postId])
    React.useEffect(()=>{
        setCommentByPostId(comments.filter(comment=>comment.postId===Number(postId)))
    },[comments, postId])

    console.log(comments)
    return (
        <div>
            {postById?(
                <Card size="small" >
                <Row>
                    <Col span={12}>
                        <p>Author: {users.find((user)=>user.id===postById?.userId)?.name}</p>
                        <p>Create at: 1/1/2001</p>
                    </Col>
                    <Col span={12}>
                    
                    </Col>
                </Row>
                <p>{postById?.body}</p> 
                <Collapse defaultActiveKey={['1']} ghost 
                items={[{
                    key: '1',
                    label: (
                    
                        <p style={{margin:0, padding:0, color:'blue'}} >{commentByPostId.length} replies</p>
                    ),
                    children: commentByPostId.map(comment=>(<Comment key={comment.id} comment={comment}/>)),
                }]} 
                />
                </Card>
            ):(null)}
        </div>
       
    )
}