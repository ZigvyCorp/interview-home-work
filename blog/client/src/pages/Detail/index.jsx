import React, {  useEffect, useState } from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import {Link, useNavigate, useParams} from "react-router-dom"
import './styles.scss';
import PropTypes from 'prop-types';
import UserComment from '../../components/UserComment';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, getPostDetail, getUsers } from '../../redux/action/postAction';

function PostInformation({data}){
  
  return(
    <Container style={{margin:"15px 0"}}>
      <Row>
        <Col xs={12} md={8} className="post-infor">
          <p>Author: {data?.name}</p>
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
function Detail({...others}) {
  const navigate = useNavigate();
  let { id } = useParams();
  const {postDetail, users,comments} = useSelector(state => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostDetail(id));
  }, []);
  useEffect(() => {
    if(users.length === 0){
      dispatch(getUsers());
    }
  }, [users,dispatch]);
  useEffect(() => {
    if(comments.length === 0){
      dispatch(getComments())
    }
  }, []);
  const user = users?.filter((user)=> user.id === postDetail?.userId)[0];
  const postComments = comments.filter((comment)=> comment.postId === postDetail.id)
  return (
    <div style={{
        padding:"20px 0"
    }}>
        <Button style={{
            marginBottom:20
        }}
        onClick={()=> navigate(-1)}>
            Go Back
        </Button>
        <Card className="post">
            <Card.Body>
                <Card.Title className="post-title">
                    {postDetail.title}
                </Card.Title>
                <PostInformation data={user}/>
                <Card.Text style={{
                lineHeight:1.6,
                padding:"0 10px"
                }}>
                    {
                    postDetail.body
                    }
                </Card.Text>
                <div className="post-btn-group">
                    <Button
                    className="view-cmt-btn"
                    variant="outline">
                        {postComments?.length} replies
                    </Button>
                </div>
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
            </Card.Body>
        </Card>
    </div>
  )
}
Detail.propTypes = {
  data:PropTypes.object
}

export default Detail