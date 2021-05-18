import React,{useState} from 'react';


import {Avatar,Card ,Button, CardActions,TextareaAutosize,TextField, CardContent,CardHeader,CardMedia,IconButton,Typography} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';
import { useContext } from "react";
import moment from 'moment';
import useStyles from './styles';
import { AuthContext } from "../../../context/AuthContext";
import {comment} from '../../../api/index';
import Divider from '@material-ui/core/Divider'
import PropTypes from 'prop-types';

export default function Post({post}){
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  const [text, setText] = useState('')
  const handleChange = event => {
    setText(event.target.value)
  } 
  const [values, setValues] = useState({
    
    comments: post.comments
  })
  const addComment = (event) => {
    if(event.keyCode == 13 && event.target.value){
      event.preventDefault()
      comment({
        userId: user.user._id
      },  post._id, {text: text}).then((data) => {
        updateComments(data.comments);
      })
    }
  }
  const commentBody = item => {
    return (
      <p className={classes.commentText}>
        
        {item.text}
       
      </p>
    )
  }

  const updateComments = (comments) => {
    setValues({...values, comments: comments})
  }


    return (<Card>
        <CardHeader avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format('HH:MM MMM DD,YYYY')}
        action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
         
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
        {post.title}
        </Typography>
        <Typography variant='body2' component='p' color='textSecondary'>
        {post.body}
        </Typography>
      </CardContent>
      <CardActions>
      
      <CardHeader
              
              title={ <TextField
                onKeyDown={addComment}
                multiline
                value={text}
                onChange={handleChange}
                placeholder="Write something ..."
            
                className={classes.commentField}
                margin="normal"
                />}
              className={classes.cardHeader}
        />
        { post.comments.map((item, i) => {
            return <CardHeader
                     
            title={commentBody(item)}
            className={classes.cardHeader}
            key={i}/>
              })
        }
      </CardActions>
    </Card>)
        ;
    
}
