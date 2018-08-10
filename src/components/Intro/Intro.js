import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card/Card';
import RunIcon from '@material-ui/icons/DirectionsRun';
import MusicIcon from '@material-ui/icons/MusicNote';
import ComputerIcon from '@material-ui/icons/Computer';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {},
  headerContainer: {
    marginTop: theme.spacing.unit * 8,
    paddingRight: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 4
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 40,
    paddingBottom: 32
  },
  headerTitle: {
    margin: 0
  },
  headerDescription: {
    marginTop: 20,
    fontSize: 72,
    maxWidth: 720,
    color: theme.palette.text.primary
  },
  interestButton: {
    height: '100%',
    color: 'white',
    '&:hover': {
      color: '#FFFFFFAA',
      backgroundColor: 'transparent'
    },
  },
  cardContainer: {
    padding: 2.5
  },
  introCard: {
    width: '100%',
    height: 300,
    backgroundColor: theme.palette.primary.main
  },
  introCardIcon: {
    color: theme.palette.text.primary,
  }
});

const Intro = props => {
  const { classes } = props;
  return (
    <header>
      <Grid container className={classes.headerContainer}>
        <Grid container item sm={10} className={classes.titleContainer}>
          <Grid sm={12} item>
            <Typography className={classes.headerTitle} variant='subheading'>
              RYAN W. DAVIS | FULLSTACK ENGINEER
            </Typography>
          </Grid>
          <Grid sm item>
            <Typography className={classes.headerDescription} variant='display4'>
              Explore my passions |<br/>discover something new
            </Typography>
          </Grid>
        </Grid>
        <Grid container item sm={12}>
          <Grid item xs={12} sm={4} className={classes.cardContainer}>
            <Card className={classes.introCard}>
              <Button fullWidth className={classes.interestButton}>
                <MusicIcon style={{ fontSize: 72 }}/>
                <span>Music</span>
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.cardContainer}>
            <Card className={classes.introCard}>
              <Button fullWidth className={classes.interestButton}>
                <ComputerIcon style={{ fontSize: 72 }}/>
                <span>Technology</span>
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.cardContainer}>
            <Card className={classes.introCard}>
              <Button fullWidth className={classes.interestButton}>
                <RunIcon style={{ fontSize: 72 }}/>
                <span>Adventures</span>
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
};

export default withStyles(styles)(Intro);