import { Card, Row, Col, Collapse, Button } from 'antd'
import Comment from './Comment'
import { IPost } from '../type/IPost'
import { selectAllUser } from '../features/users/usersSlice'
import { selectCommets } from '../features/comments/commentsSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setPostId } from '../app/action/actionCreator'
import { IUser } from '../type/IUser'
import { IComment } from '../type/IComment'
import { Link } from 'react-router-dom'
import React from 'react'
export default function PostContent({post}:{post:IPost})
{
    const dispatch=useDispatch()
    const users:IUser[]=useSelector(selectAllUser)
    const comments:IComment[]=useSelector(selectCommets)
    const [commentByPostId, setCommentByPostId]=React.useState<IComment[]>([] as IComment[])
    function handleCLickLoadComment(postId:number)
    {
        dispatch(setPostId(postId));
    }
    React.useEffect(()=>{
        setCommentByPostId(comments.filter(comment=>comment.postId===post.id))
    },[comments])

    return (
        <Card title={<Link to={`/post/${post.id}/details`}>{post.title}</Link>} size="small" key={post.id} >
            <Row>
                <Col span={12}>
                    <p>Author:  {users.find((user)=>user.id===post.userId)?.name}</p>
                    <p>Create at: 1/1/2001</p>
                </Col>
                <Col span={12}>
                
                </Col>
            </Row>
            <p>{post.body.substring(0,100)} ...</p> 
            {commentByPostId.length<1?
            ( <p style={{margin:0, padding:0, color:'blue', cursor:'pointer'}} onClick={ ()=>handleCLickLoadComment(post.id)}> comments</p>)
            :( 
            <Collapse defaultActiveKey={['1']} ghost 
            items={[{
                key: '1',
                label: (
                
                    <p style={{margin:0, padding:0, color:'blue'}} >{commentByPostId.length} replies</p>
                ),
                children: commentByPostId.map(comment=>(<Comment key={comment.id} comment={comment}/>)),
            }]} 
            />) 
            }
        </Card>
    )
}