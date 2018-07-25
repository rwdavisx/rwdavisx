import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import RyLogo from '../../svg/RyLogo';

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 48
  },
  link: {
    alignSelf: 'center',
    'padding-left': 10,
  }
};

const RyAppBar = props => {
  const { classes } = props;
  return (
    <AppBar classes={classes.root} position={'static'}>
      <Toolbar>
        <Grid container spacing={12}>
          <Grid item md={4} sm={2} xs={12}>
            <RyLogo className={classes.logo}/>
          </Grid>
          <Grid item md={1} sm={2} xs={12} className={classes.link}>
            <Button fullWidth>HOME</Button>
          </Grid>
          <Grid item md={1} sm={2} xs={12} className={classes.link}>
            <Button fullWidth>INTERESTS</Button>
          </Grid>
          <Grid item md={1} sm={2} xs={12} className={classes.link}>
            <Button fullWidth>ABOUT</Button>
          </Grid>
          <Grid item md={1} sm={2} xs={12} className={classes.link}>
            <Button fullWidth>RESUME</Button>
          </Grid>
          <Grid item md={1} sm={2} xs={12} className={classes.link}>
            <Button fullWidth>CONTACT</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(RyAppBar);