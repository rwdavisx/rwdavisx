import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import RyLogo from '../../svg/RyLogo';

const styles = {
  root: {
    display: 'grid'
  },
  logo: {
    fontSize: 48
  },
  links: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
};

const RyAppBar = props => {
  const { classes } = props;
  return (
    <AppBar classes={classes.root} position={'static'}>
      <Toolbar>
        <Grid container spacing={12}>
          <Grid item xs={4}>
            <RyLogo className={classes.logo}/>
          </Grid>
          <Grid item xs={8} className={classes.links}>
            <Button>HOME</Button>
            <Button>INTERESTS</Button>
            <Button>ABOUT</Button>
            <Button>RESUME</Button>
            <Button>CONTACT</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(RyAppBar);