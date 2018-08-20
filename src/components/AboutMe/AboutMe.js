import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import SelfImg from '../../images/ry-self.JPG';

const styles = theme => ({
  sectionContainer: {
    height: 800,
    background: theme.colors.navy,
    alignItems: 'center'
  },
  aboutText: {
    paddingLeft: theme.spacing.unit * 16,
  },
  aboutImg: {
    marginLeft: theme.spacing.unit * 16,
    marginRight: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 16,
    background: 'transparent',
    border: `4px solid ${theme.palette.secondary.main}`,
    borderSpacing: 100,
    height: 500,
    width: 400
  }
});

const AboutMe = props => {
  const {classes} = props;
  return (
    <section>
      <Grid container className={classes.sectionContainer}>
        <Grid item md={12}>
          <Typography className={classes.aboutText} variant='display4'>
            About Me:
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography className={classes.aboutText} variant='display1'>
            Hey I'm Ryan! I like tech, music, games, and food. Running is fun
            and so is my girlfriend Maddie ;). Whether I am tinkering with a computer,
            lining up double drops like Andy C, or running like im still relevant, you can be sure
            im always having fun.
          </Typography>
        </Grid>
        <Grid item md>
          <Card className={classes.aboutImg}>
            <CardMedia style={{height: '95%', margin: '2.5%'}} image={SelfImg}/>
          </Card>
        </Grid>
      </Grid>
    </section>
  )
};

export default withStyles(styles)(AboutMe);