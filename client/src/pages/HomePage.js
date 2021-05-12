import React from 'react';
import {Container, Fab } from '@material-ui/core' ;
import Header from '../components/Header';

import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';




export default function HomePage(){
   
    const classes = useStyles();
    
    return  (
    <Container maxWidth='lg' > 
        <Header />
      
        <Fab
        color='primary'
        className={classes.fab}
     
      >
        <AddIcon />
      </Fab>
    </Container>);
    
}