import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import RyLogo from '../../svg/RyLogo';

const styles = {
  root: {
    display: 'grid',
    'grid-template-columns': '2fr 2fr'
  },
  logo: {
    fontSize: 48,
    display: 'flex',
    flex: '1 1',
  },
  links: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flex: 3,
  }
};

const RyAppBar = props => {
  const { classes } = props;
  return (
    <div>
      <AppBar position={'static'}>
        <Toolbar className={classes.root}>
          <RyLogo className={classes.logo}/>
          <div className={classes.links}>
            <Button>HOME</Button>
            <Button>INTERESTS</Button>
            <Button>ABOUT</Button>
            <Button>RESUME</Button>
            <Button>CONTACT</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(RyAppBar);