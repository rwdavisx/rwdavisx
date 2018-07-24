import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  media: {
    height: '50px',
    width: '40px'
  }
};

const Brand = (props) => {
  const { classes } = props;
  return (
    <CardMedia image={'images/Ry.png'} className={classes.media}/>
  );
};

export default withStyles(styles)(Brand);