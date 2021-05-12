import React from 'react';
import {  Typography} from '@material-ui/core';
import useStyle from  './styles';
export default function Header(){
    const classes = useStyle();
    return (
        <Typography variant="h4" align="center" className={classes.contaner}>
             blog
        </Typography>

    );
    
}