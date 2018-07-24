import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Theme } from '../Styles';

const styles = {
  card: {
    backgroundColor: Theme.colors.navy,
    'height': '64px',
    'display': 'grid',
    'grid-template-columns': 'auto 50% auto',
    'grid-template-rows': '100%'
  },
  menu: {
    color: Theme.colors.green,
    'grid-column-start': 4
  },
  brand: {
    color: Theme.colors.green
  },
  leftContent: {
    display: 'flex',
    'flex-direction': 'row',
    'align-items': 'center',
    'justify-content': 'flex-start'
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


const BaseToolbar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Ryan W. Davis
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(BaseToolbar);