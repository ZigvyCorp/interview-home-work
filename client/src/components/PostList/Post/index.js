import React from 'react';


import {Avatar,Card ,Button, CardActions,TextareaAutosize,TextField, CardContent,CardHeader,CardMedia,IconButton,Typography} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';

import moment from 'moment';
import useStyles from './styles';


export default function Post({post}){

  const classes = useStyles();

    return <Card>
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
      <form noValidate autoComplete='off' className={classes.form}>
       
        <TextField
          className={classes.textarea}
         xs={8}
          placeholder='Content...'
         
       
        />
        
        <div className={classes.footer}    xs={12}>
          <Button
       
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            disableElevation
          >
            Create
          </Button>
        </div>
      </form>
      </CardActions>
    </Card>
        ;
    
}