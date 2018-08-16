import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import RwdLogo from '../../svg/RwdLogo';

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
      justifyContent: 'left'
    }
  },
  menu: {
    display: 'flex',
    justifyContent: 'right'
  },
  logo: {
    color: theme.palette.secondary.main,
    height: 72,
    width: '100%'
  },
  link: {
    alignSelf: 'center',
    height: '100%'
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
    <AppBar classes={classes.root} position={'sticky'}>
      <Toolbar>
        <Grid container spacing='8'>
          <Grid item md={2} xs={4} style={{ padding: 0 }} className={classes.logoContainer}>
            <RwdLogo className={classes.logo}/>
          </Grid>
          <Hidden mdDown>
            <Grid item md={2} className={classes.link}>
              <Button variant='flat' className={classes.btn} fullWidth>HOME</Button>
            </Grid>
            <Grid item md={2} className={classes.link}>
              <Button variant='flat' className={classes.btn} fullWidth>INTERESTS</Button>
            </Grid>
            <Grid item md={2} className={classes.link}>
              <Button variant='flat' className={classes.btn} fullWidth>ABOUT</Button>
            </Grid>
            <Grid item md={2} className={classes.link}>
              <Button variant='flat' className={classes.btn} fullWidth>RESUME</Button>
            </Grid>
            <Grid item md={2} className={classes.link}>
              <Button variant='text' className={classes.btn} fullWidth>CONTACT</Button>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={4} className={classes.menu}>
              <Button variant='text' className={classes.btn} fullWidth>
                MENU
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(RyAppBar);