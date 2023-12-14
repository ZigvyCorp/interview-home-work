import React from 'react';
import { Typography } from '@material-ui/core';
import Logo from './Logo';
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Logo /> {/* Chèn component Logo vào đây */}
    <Typography variant='h4' align='center' className={classes.container}>
      Blogs
    </Typography>
    </div>
  );
}
