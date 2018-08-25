import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import FB from './svg/F_icon.svg';
import Instagram from './svg/Instagram.svg';
import Twitter from './svg/TwitterIcon.svg';
import SoundCloud from './svg/SoundcloudLogo.svg';
import Steam from './svg/SteamIcon.svg';
import SelfImg from '../../images/ry-self.JPG';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: theme.colors.navy,
    height: 'auto',
    width: 'auto'
  },
  contentCol: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 2
  },
  textContent: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 8,
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 2
  },
  photoContainer: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 2,
    background: 'transparent'
  },
  photo: {
    display: 'block',
    maxHeight: 500,
    maxWidth: '100%',
    border: `4px solid ${theme.palette.secondary.main}`
  },
  linksContainer: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  }
});

const AboutMe = props => {
  const { classes } = props;
  return (
    <section>
      <Grid container className={classes.root}>
        <Grid item container md={6} direction='column'>
          <Grid item>
            <Typography variant='display4' className={classes.header}>
              About Me:
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='display1' className={classes.textContent}>
              Hey I'm Ryan! I like tech, music, games, and food. Running is fun
              and so is my girlfriend Maddie ;). Whether I am tinkering with a computer,
              lining up double drops like Andy C, or running like im still relevant, you can be sure
              im always having fun.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container md={6} direction='column' justify='center' alignItems='center'>
          <Grid item className={classes.photoContainer}>
            <Card>
              <img className={classes.photo} src={SelfImg}/>
            </Card>
          </Grid>
          <Grid item container justify={'space-evenly'} alignItems={'center'} className={classes.linksContainer}>
            <Grid item>
              <Button size={'small'} href='https://www.facebook.com/rwdavisx'>
                <img style={{ maxWidth: 50 }} src={FB}/>
              </Button>
            </Grid>
            <Grid item>
              <Button size={'small'} href='https://www.instagram.com/ryandavis__'>
                <img src={Instagram} style={{ width: 50 }}/>
              </Button>
            </Grid>
            <Grid item>
              <Button size={'small'} href='https://twitter.com/ryandavis_'>
                <img src={Twitter} style={{ width: 50 }}/>
              </Button>
            </Grid>
            <Grid item>
              <Button size={'small'} href='https://soundcloud.com/djrydavis'>
                <img src={SoundCloud} style={{ width: 50 }}/>
              </Button>
            </Grid>
            <Grid item>
              <Button size={'small'} href='https://steamcommunity.com/id/Davisdog252'>
                <img src={Steam} style={{ width: 50 }}/>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default withStyles(styles)(AboutMe);
