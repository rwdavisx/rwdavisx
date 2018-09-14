import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {

  }
});

const Callback = props => {
 const {classes} = props;
  return (
    <div className={classes.root}>
      <h1>Loading...</h1>
    </div>
  );
};

export default withStyles(styles)(Callback);