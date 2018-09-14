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
    justifyContent: 'flex-end'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent'
    }
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
  const goTo = (route) => {
    props.history.replace(`/${route}`);
  };

  const login = () => {
    props.auth.login();
  };

  const logout = () => {
    props.auth.logout();
  };

  const { classes } = props;
  const { isAuthenticated } = props.auth;

  return (
    <AppBar position={'sticky'}>
      <Toolbar variant='dense'>
        <Grid container justify='space-between' spacing={8}>
          <Grid item md={2} xs={4} className={classes.link}>
            <a className={classes.logo}>
              <CodeIcon viewBox='-10 0 24 24'/>
              <Typography color={'textSecondary'}>RwD</Typography>
              <CodeIcon viewBox='10 0 24 24'/>
            </a>
          </Grid>
          <Hidden smDown>
            <Grid item md className={classes.link}>
              <Button variant='text' className={classes.btn} fullWidth onClick={goTo}>HOME</Button>
            </Grid>
            <Grid item md className={classes.link}>
              <Button variant='text' className={classes.btn} fullWidth>INTERESTS</Button>
            </Grid>
            <Grid item md className={classes.link}>
              <Button variant='text' className={classes.btn} fullWidth>ABOUT</Button>
            </Grid>
            <Grid item md className={classes.link}>
              <Button variant='text' className={classes.btn} fullWidth>RESUME</Button>
            </Grid>
            <Grid item md className={classes.link}>
              <Button variant='text' className={classes.btn} fullWidth>CONTACT</Button>
            </Grid>
            <Grid item md className={classes.link}>
              {
                !isAuthenticated() && (
                  <Button variant='text' className={classes.btn} fullWidth onClick={login}>Log In</Button>
                )
              }
              {
                isAuthenticated() && (
                  <Button variant='text' className={classes.btn} fullWidth onClick={logout}>Log Out</Button>
                )
              }
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={4} className={classes.menu}>
              <SideDrawer goTo={goTo} login={login} logout={logout} auth={props.auth}/>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(RyAppBar);