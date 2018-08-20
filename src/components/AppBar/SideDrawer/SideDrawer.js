import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  drawer: {
    backgroundColor: 'white'
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  btn: {
    color: theme.palette.text.secondary,
    padding: 0,
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent'
    }
  },
  menuIcon: {
    color: theme.palette.text.secondary,
    padding: 8,
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent'
    }
  }
});

class SideDrawer extends React.Component {
  state = {
    right: false
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button>Home</ListItem>
          <ListItem button>Interests</ListItem>
          <ListItem button>About</ListItem>
          <ListItem button>Resume</ListItem>
          <ListItem button>Contact</ListItem>
        </List>
      </div>
    );
    return (
      <div>
        <Button variant='text' className={classes.btn} fullWidth
                onClick={this.toggleDrawer('right', true)}
        >
          <MenuIcon fontSize={24} className={classes.menuIcon}/>
        </Button>
        <Drawer
          variant="temporary"
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          classes={{
            paperAnchorRight: classes.drawer
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(SideDrawer);