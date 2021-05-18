import React from 'react';
import {  Typography} from '@material-ui/core';
import useStyle from  './styles';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from "../../api/index";



export default function Header(props){
    const classes = useStyle();
    const { sections, title } = props;
    const { user,dispatch } = useContext(AuthContext);
    console.log(user.user.name);
    const handleClick = (e) => {
      console.log("ok");
      e.preventDefault();
      logoutCall(dispatch);
        
    };
    return (
        <React.Fragment>
          <Toolbar className={classes.toolbar}>
            <Button size="small">icon</Button>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              Blog
            </Typography>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              className={classes.toolbarUser}
            >
              {user.user.name}
            </Typography>
            <Button variant="outlined" size="small" onClick={handleClick}>
              Sign out
            </Button>
          </Toolbar>
         
        </React.Fragment>
      );
    
}