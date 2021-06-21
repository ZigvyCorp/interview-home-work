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
import { showComment,hideComment } from '../../../redux/actions';
export default function Post({post}){
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  const [text, setText] = useState('')
  const handleChange = event => {
    setText(event.target.value)
  } 

  const dispatch = useDispatch();
  const  {isShowCmts}  = useSelector(commentState$);

  const abortController = new AbortController();
  const signal = abortController.signal;
  const [values, setValues] = useState({
    
    comments: post.comments
  })
  const [getUser, setUser] = useState("");

  const [showInfo,getShow] = useState(false);
  console.log("e  "+getUser);



  const addComment = (event) => {
    if(event.keyCode == 13 && event.target.value){
      event.preventDefault()
      comment({
        userId: user.user._id
      },  post._id, {text: text}).then((data) => {
    
        if (data.error) {
          console.log(data.error);
        } else {
          setText('');
          updateComments(data.comments);
          
        }
      })
    }
  }
  const CommentBody = item2=> {

  
  


    
    return (
      
    
        <CardContent>   
           <CardHeader avatar={<Avatar>A</Avatar>}
          title={item2.postedBy.name}
          subheader={moment(item2.updatedAt).format('HH:MM MMM DD,YYYY')}
          action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
          />
          <Typography variant='body2' color='textPrimary'>
          {item2.text}
  
          </Typography>
          <Typography variant='body2' component='p' color='textSecondary'>
        
          </Typography>
        </CardContent>
       
      )
  }

  

 const update = () => {
  
 
  getShow(current => !current);

};



const onOpen = React.useCallback(() => {
 
  if(showInfo == false)
  {
    console.log("yes");
    dispatch(showComment());
    update();
  }
 else
 {
  console.log("no");
  dispatch(hideComment());
 }
}, [dispatch]);

const updateComments = React.useCallback((comments) => {
  console.log(comments);
    setValues({...values, comments: comments})
}, [values]);
 


    return (<Card>
        <CardHeader avatar={<Avatar>A</Avatar>}
        title={post.postedBy.name}
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
     
              <IconButton key={post._id} onClick={onOpen} className={classes.button} aria-label="Comment" color="secondary">
                <CommentIcon/>
              </IconButton> <span>{values.comments.length}</span>
     
          <Divider/>
            <div style={{display: showInfo ? 'block' : 'none' }}>
            {
                
                values.comments.map((item, i) => {
                return <CardHeader
                        
                title={CommentBody(item)}
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
