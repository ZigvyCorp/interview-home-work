import React,{useState,useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {Avatar,Card ,Button, CardActions,TextareaAutosize,TextField, CardContent,CardHeader,CardMedia,IconButton,Typography} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';
import { useContext } from "react";
import { commentState$ } from '../../../redux/selectors';
import moment from 'moment';
import useStyles from './styles';
import { AuthContext } from "../../../context/AuthContext";
import {comment,findPeople} from '../../../api/index';
import Divider from '@material-ui/core/Divider'
import PropTypes from 'prop-types';
import { showComment } from '../../../redux/actions';
export default function Post({post}){
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  const [text, setText] = useState('')
  const handleChange = event => {
    setText(event.target.value)
  } 

  const dispatch = useDispatch();
  const  isShowcmt  = useSelector(commentState$);
  console.log(isShowcmt);
  const abortController = new AbortController();
  const signal = abortController.signal;
  const [values, setValues] = useState({
    
    comments: post.comments
  })
  const [getUser, setUser] = useState("");
 
  const [count, setCount] = useState(0);
  const [showInfo,getShow] = useState(false);
  
  const addComment = (event) => {
    if(event.keyCode == 13 && event.target.value){
      event.preventDefault()
      comment({
        userId: user.user._id
      },  post._id, {text: text}).then((data) => {
    
        if (data.error) {
          console.log(data.error);
        } else {
          setText('')
          updateComments(data.comments)
        }
      })
    }
  }
  const commentBody = item => {
    return (
      
    
      <CardContent>   
         <CardHeader avatar={<Avatar>A</Avatar>}
        title={getUserById(item.postedBy)}
        subheader={moment(item.updatedAt).format('HH:MM MMM DD,YYYY')}
        action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <Typography variant='body2' color='textPrimary'>
        {item.text}

        </Typography>
        <Typography variant='body2' component='p' color='textSecondary'>
      
        </Typography>
      </CardContent>
     
    )
  }

  const getUserById = item => {
    findPeople({
      userId: item
    }, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setUser(data[0].name,getUser);
      
        
      }
    });
    return(
      <p >
        
        {getUser}
    
      </p>
    );
  }

 

const onOpen = React.useCallback(() => {
  dispatch(showComment());
  
}, [dispatch]);


  const updateComments = (comments) => {
    console.log(comments);
    setValues({...values, comments: comments})
  }


    return (<Card>
        <CardHeader avatar={<Avatar>A</Avatar>}
        title={getUserById(post.postedBy)}
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
     
              <IconButton onClick={onOpen} className={classes.button} aria-label="Comment" color="secondary">
                <CommentIcon/>
              </IconButton> <span>{values.comments.length}</span>
     
          <Divider/>
            <div open={isShowcmt}>
            {
                
                values.comments.map((item, i) => {
                return <CardHeader
                        
                title={commentBody(item)}
                className={classes.cardHeader}
                key={i}/>



                
                  })
            }
                  </div>
       
         
      <CardActions>
      
      { <TextField
        onKeyDown={addComment}
        multiline
        value={text}
        onChange={handleChange}
        placeholder="Write something ..."
    
        className={classes.commentField}
        margin="normal"
        />}
</CardActions>
     
    </Card>)
        ;
    
}
