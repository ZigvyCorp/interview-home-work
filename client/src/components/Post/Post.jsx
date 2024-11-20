import React,{useEffect}  from 'react';
import {Row,Col,Tag, Comment, Tooltip, List, Collapse } from 'antd';
import moment from 'moment';
import {getCommentOfPost} from '../../actions/postActions';
import {useDispatch,useSelector} from 'react-redux';
import WordLimit from 'react-word-limit';

const { Panel } = Collapse;

const listColor = ["magenta","red","volcano","orange","gold",
"lime","green","cyan","green","cyan","blue","geekblue","purple"];

function Post({post,author}) {
    const dispatch = useDispatch();
    const postData= useSelector((state)=> state.postsData);
    const usersData = useSelector((state)=> state.usersData);
    const getCommentByPostId = (postId)=> dispatch(getCommentOfPost(postId));
    const date = new Date(post.created_at);

    useEffect(()=>{
        getCommentByPostId(post.id);
    },[]);
    const data = 
    postData.comment.map((cmt)=>{
        return {
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: cmt.owner,
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: (
            <p>
               {cmt.content}
            </p>
            ),
            datetime: (
            <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().subtract(1, 'days').fromNow()}</span>
            </Tooltip>
            ),
        }
    })

  return (
    <section className='post'>
        <Row className='post_title'>
            <Col span={24}>
                <h2>Use and modify an antd component</h2>
            </Col>
        </Row>  
        <Row className='post_information'>
            <Col className='post_author' span={12}>
                <p>Author: <span>{author.name}</span></p>
                <p>Create_at: <span>{date.toUTCString()}</span></p>
            </Col>
            <Col className='post_tags' span={12}>
                <ul className='list_tags'>
                    {post.tags.map((tag,index)=>{
                        return <li key={index}> <Tag color={listColor[index]}>{tag}</Tag> </li>
                    })}
                    
                </ul>
            </Col>
        </Row>
        <Row className='post_content'>
            <Col span={24}>
                <WordLimit >{post.content}</WordLimit> 
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Collapse bordered={false}>
                    <Panel header={<p>{data.length} replies</p>} key="1">
                        <List
                            className="comment-list"
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                            <li>
                                <Comment
                                actions={item.actions}
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                                />
                            </li>)}
                        />
                    </Panel>
                </Collapse>
            </Col>
        </Row>
    </section>
  )
}


export default Post;
