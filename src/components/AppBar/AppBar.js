import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import RyLogo from '../../svg/RyLogo';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'left',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  logo: {
    fontSize: 48
  },
  link: {
    alignSelf: 'center'
  },
  btn: {
    '&:hover': {
      color: theme.colors.green
    }
  }
});

const RyAppBar = props => {
  const { classes } = props;
  return (
    <AppBar classes={classes.root} position={'static'}>
      <Toolbar>
        <Grid container spacing='8'>
          <Grid item sm={2} xs={12} className={classes.logoContainer}>
            <RyLogo className={classes.logo}/>
          </Grid>
          <Grid item sm={2} xs={12} className={classes.link}>
            <Button variant='flat' className={classes.btn} fullWidth>HOME</Button>
          </Grid>
          <Grid item sm={2} xs={12} className={classes.link}>
            <Button variant='flat' className={classes.btn} fullWidth>INTERESTS</Button>
          </Grid>
          <Grid item sm={2} xs={12} className={classes.link}>
            <Button variant='flat' className={classes.btn} fullWidth>ABOUT</Button>
          </Grid>
          <Grid item sm={2} xs={12} className={classes.link}>
            <Button variant='flat' className={classes.btn} fullWidth>RESUME</Button>
          </Grid>
          <Grid item sm={2} xs={12} className={classes.link}>
            <Button variant='text' className={classes.btn} fullWidth>CONTACT</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(RyAppBar);