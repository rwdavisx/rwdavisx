import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import loading from './Loading.svg';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  }
});

const Callback = props => {
 const {classes} = props;
  return (
    <div className={classes.root}>
      <img src={loading} alt='loading' />
      <h1>Loading...</h1>
    </div>
  );
};

export default withStyles(styles)(Callback);