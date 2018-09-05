import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import SelfImg from '../../images/ry-self.JPG';

const styles = theme => ({
  root: {
    background: theme.colors.navy,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
  },
  textContent: {
    paddingRight: theme.spacing.unit * 8,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit * 4,
      textAlign: 'center',
    },
  },
  card: {
    border: `3px solid ${theme.palette.secondary.main}`,
    padding: 4,
    maxWidth: 450,
    backgroundColor: 'transparent',
  },
  media: {
    objectFit: 'cover',
  }
});

const AboutMe = props => {
  const { classes } = props;
  return (
    <Grid container component='section' className={classes.root} justify={'center'}>
      <Grid item xs={12} md={10} container justify='space-between' alignItems='center'>
        <Grid item xs={12} md={8} container direction='column' className={classes.textContent}>
          <Typography variant='display4' gutterBottom>
            About Me:
          </Typography>
          <Typography variant='subheading' paragraph color={'textSecondary'}>
            Hey everyone, I'm Ryan Davis and welcome to my little corner of the web. Because Technology has
            always played such an important role in my life, I wanted to create a space where I could express
            myself in a way that comes naturally to me. As you might expect, there are quite a few things I want to
            share
            and if you continue on I'm sure you will learn a thing or two!
          </Typography>
          <Typography variant='subheading' paragraph color={'textSecondary'}>
            The inspiration for this project was born from wanting to show people the many sides of who I am.
            People, places, and events over the years have made me who I am today, and I think many of these factors
            should
            be remembered and serve as a point of reference. Anyone will be able to see where I have come from and
            connect
            with me as I move forward down my path in life.
          </Typography>
          <Typography variant='subheading' paragraph color={'textSecondary'}>
            The things I do in my spare time also deserve some type of recognition, and this site will facilitate
            a hub to all of these external activities. This space will serve as an exhibition of the work I want
            displayed
            and as an outlet for some of the memories I want to persist from these hobbies. Feel free to drop any
            suggestions
            on how I can improve this site and please enjoy your stay!
          </Typography>
        </Grid>
        <Grid item container xs={12} md={4} justify='center'>
          <Card raised className={classes.card}>
            <CardMedia component='img' image={SelfImg} className={classes.media}/>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(AboutMe);
