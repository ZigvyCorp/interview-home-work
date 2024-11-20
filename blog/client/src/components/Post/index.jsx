import React, { useEffect, useState } from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from "react-router-dom"
import UserComment from '../UserComment';
import './styles.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function PostInformation({user}){
  return(
    <Container style={{margin:"15px 0"}}>
      <Row>
        <Col xs={12} md={8} className="post-infor">
          <p>Author: {user?.name}</p>
          <p>Created at: Sep, 20, 2018</p>
        </Col>
        <Col xs={12} md={4}>
          <div className="tags">
            <span className="magenta">magenta</span>
            <span className="red">red</span>
            <span className="volcano">volcano</span>
            <span className="orange">orange</span>
            <span className="gold">gold</span>
            <span className="lime">lime</span>
            <span className="green">green</span>
            <span className="cyan">cyan</span>
            <span className="blue">blue</span>
            <span className="geekblue">geekblue</span>
            <span className="purple">purple</span>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
function Post({data,...others}) {
  const {users, comments} = useSelector(state => state.posts)
  const [openComment,setOpenComment] = useState(false);
  const [viewFull,setViewFull] = useState(false);
  const hasViewMore = data.body?.length > 100?true:false;
  const user = users?.filter((user)=> user.id === data?.userId)[0]
  const postComments = comments.filter((comment)=> comment.postId === data.id)
  useEffect(() => {
    if(data.body?.length < 100){
      setViewFull(true);
    }
  }, [data.body]);
  
  return (
    <Card className="post">
      <Card.Body>
        <Card.Title className="post-title">
          {data.title}
        </Card.Title>
        <PostInformation user={user}/>
        <Card.Text style={{
          lineHeight:1.6,
          padding:"0 10px"
          }}>
          {viewFull?
          data.body:
          data.body?.substring(0,100) + "..."
          }
          {hasViewMore&&(
            <Button
            as={Link}
            to="#"
            style={{
              padding:"2px 5px",
              verticalAlign:"text-bottom",
              fontSize:12,
              marginLeft:5
            }}
            onClick={
              ()=> setViewFull(state => !state)
            }
            variant="outline-primary">
              {viewFull?"Collapse":"View more"}
            </Button>
          )}
        </Card.Text>
        <div className="post-btn-group">
          <Button
          className="view-cmt-btn"
          variant="outline"
          onClick={()=> setOpenComment(state => !state)}>
            {postComments?.length} replies
          </Button>

          <Button
          className="view-cmt-btn"
          variant="outline"
          as={Link}
          to={"/posts/"+data.id}>
            Detail
          </Button>
        </div>
        {openComment&&(
        <div className="user-comments">
          <hr/>
          {
            postComments.map((comment, i)=>{
              return(
                <UserComment key={i} data={comment}/>
              )
            })
          }
        </div>
      )}
      </Card.Body>
    </Card>
  )
}
Post.propTypes = {
  data:PropTypes.object
}
Post.defaultProps ={
  data:{
    content:"No content"
  }
}
export default Post