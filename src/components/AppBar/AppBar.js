import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import RwdLogo from '../../svg/RwdLogo';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoContainer: {
    display: 'flex',
    height: 72,
    justifyContent: 'left',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  logo: {
    color: theme.colors.green,
    height: '100%',
    width: '100%'
  },
  link: {
    alignSelf: 'center'
  },
  btn: {
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.colors.green,
      backgroundColor: 'transparent'
    }
  }
});

const RyAppBar = props => {
  const { classes } = props;
  return (
    <AppBar classes={classes.root} position={'sticky'}>
      <Toolbar>
        <Grid container spacing='8'>
          <Grid item sm={2} xs={12} className={classes.logoContainer}>
            <RwdLogo className={classes.logo}/>
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