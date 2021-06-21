import React,{useState,useEffect} from 'react';


import {Avatar, CardContent,CardHeader,IconButton,Typography} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';

import moment from 'moment';

import {comment,findPeople} from '../../../api/index';
export default function CommentBody(item){
    const abortController = new AbortController();
    const signal = abortController.signal;
    const [getUsers, setUsers] = useState("");



    const getUserById = items => {
        findPeople({
          userId: items
        }, signal).then((data) => {
          if (data && data.error) {
            console.log(data.error)
          } else {
            setUsers(data[0].name,getUser);
          }
        });
       
      }
      useEffect( () => {
        getUserById(item.postedBy);
    }, [item._id]);

    return (
      
    
        <CardContent>   
           <CardHeader avatar={<Avatar>A</Avatar>}
          title={getUsers}
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