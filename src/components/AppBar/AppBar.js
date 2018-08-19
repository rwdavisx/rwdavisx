import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import SideDrawer from './SideDrawer/SideDrawer';

const styles = theme => ({
  root: {
    // height: 60,
    // alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'left'
    }
  },
  menu: {
    display: 'flex',
    justifyContent: 'right'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent'
    }
  },
  menuIcon: {
    color: theme.palette.text.secondary,
    height: 48,
    width: '100%'
  },
  link: {
    alignSelf: 'center',
    height: '100%',
    padding: 0
  },
  btn: {
    color: theme.palette.text.secondary,
    padding: 0,
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent'
    }
  }
});

const RyAppBar = props => {
  const { classes } = props;
  return (
    <AppBar position={'sticky'}>
      <Toolbar variant='dense'>
        <Grid container alignContent={'space-between'} spacing={8}>
          <Grid item md={2} xs={4} className={classes.link}>
            <a className={classes.logo}>
              <CodeIcon viewBox='-10 0 24 24'/>
              <Typography color={'textSecondary'}>RwD</Typography>
              <CodeIcon viewBox='10 0 24 24'/>
            </a>
          </Grid>
          <Hidden smDown>
            <Grid item md={2} className={classes.link}>
              <Button variant='text' className={classes.btn} fullWidth>HOME</Button>
            </Grid>
            <Grid item md={2} className={classes.link}>
              <Button variant='text' className={classes.btn} fullWidth>INTERESTS</Button>
            </Grid>
            <Grid item md={2} className={classes.link}>
              <Button variant='text' className={classes.btn} fullWidth>ABOUT</Button>
            </Grid>
            <Grid item md={2} className={classes.link}>
              <Button variant='text' className={classes.btn} fullWidth>RESUME</Button>
            </Grid>
            <Grid item md={2} className={classes.link}>
              <Button variant='text' className={classes.btn} fullWidth>CONTACT</Button>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={4} className={classes.menu}>
              <SideDrawer/>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(RyAppBar);