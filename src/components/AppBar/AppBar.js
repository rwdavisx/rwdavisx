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
    'padding': 5,
  }
};

const RyAppBar = props => {
  const { classes } = props;
  return (
    <AppBar classes={classes.root} position={'static'}>
      <Toolbar>
        <Grid container spacing={12}>
          <Grid item md={2} sm={2} xs={12}>
            <RyLogo className={classes.logo}/>
          </Grid>
          <Grid item sm={2} xs={12} className={classes.link}>
            <Button variant='outlined' style={{border: '2px #35c19b solid'}} fullWidth>HOME</Button>
          </Grid>
          <Grid item sm={2} xs={12} className={classes.link}>
            <Button variant='outlined' style={{border: '2px #35c19b solid'}} fullWidth>INTERESTS</Button>
          </Grid>
          <Grid item sm={2} xs={12} className={classes.link}>
            <Button variant='outlined' style={{border: '2px #35c19b solid'}} fullWidth>ABOUT</Button>
          </Grid>
          <Grid item sm={2} xs={12} className={classes.link}>
            <Button variant='outlined' style={{border: '2px #35c19b solid'}} fullWidth>RESUME</Button>
          </Grid>
          <Grid item sm={2} xs={12} className={classes.link}>
            <Button variant='outlined' style={{border: '2px #35c19b solid'}} fullWidth>CONTACT</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(RyAppBar);