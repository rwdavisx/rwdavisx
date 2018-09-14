import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card/Card';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography';
import backgroundImg from '../../images/abstract-background.jpeg';
import FB from './svg/F_icon.svg';
import Resume from '../../images/resume.pdf';
import Instagram from './svg/Instagram.svg';
import Twitter from './svg/TwitterIcon.svg';
import SoundCloud from './svg/SoundcloudLogo.svg';
import Steam from './svg/SteamIcon.svg';

const styles = theme => ({
  header: {
    background: `url(${backgroundImg})`,
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8
  },
  headerTitle: {
    width: 'fit-content',
    padding: 8,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    borderTop: `2px solid ${theme.palette.secondary.main}`

  },
  introText: {
    paddingBottom: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit * 4,
      textAlign: 'center',
      alignItems: 'center'
    }
  },
  introCard: {
    width: '100%',
    height: 500,
    backgroundColor: theme.palette.primary.main
  },
  socialMedia: {
    backgroundColor: theme.palette.secondary.main,
    height: 200
  },
  contact: {
    height: 200
  },
  test: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
  },
  introCardRoot: {
    textAlign: 'center'
  }
});

const Intro = props => {
  const { classes } = props;
  const renderCard = itemProps => <Card raised classes={{ root: classes.introCardRoot }}
                                        className={classes.introCard} {...itemProps} />;
  return (
    <Grid container direction={'column'} alignItems={'center'} className={classes.header} component='header'>
      <Grid item xs={12} md={10} container direction={'column'} className={classes.introText}>
        <Typography className={classes.headerTitle} variant='title'>
          RYAN W. DAVIS | FULLSTACK ENGINEER
        </Typography>
        <Typography variant='display3' color={'textPrimary'} gutterBottom style={{ paddingTop: '40px' }}>
          <span>Welcome everyone<br/></span>
          <span>Discover a little about me<br/></span>
        </Typography>
      </Grid>
      <Grid item sm={12} md={10} container direction={'row'} component={renderCard}>
        <Grid item sm={12} md={8} container direction={'column'} className={classes.socialMedia}
              justify={'space-around'} alignItems={'center'}>
          <Typography variant={'display1'}>
            Find Me On These Networks
          </Typography>
          <Grid container justify={'space-evenly'} alignItems={'center'}>
            <Grid item>
              <Button size={'small'} href='https://www.facebook.com/rwdavisx'>
                <img style={{ maxWidth: 50 }} alt='' src={FB}/>
              </Button>
            </Grid>
            <Grid item>
              <Button size={'small'} href='https://www.instagram.com/ryandavis__'>
                <img src={Instagram} alt='' style={{ width: 50 }}/>
              </Button>
            </Grid>
            <Grid item>
              <Button size={'small'} href='https://twitter.com/ryandavis_'>
                <img src={Twitter} alt='' style={{ width: 50 }}/>
              </Button>
            </Grid>
            <Grid item>
              <Button size={'small'} href='https://soundcloud.com/djrydavis'>
                <img src={SoundCloud} alt='' style={{ width: 50 }}/>
              </Button>
            </Grid>
            <Grid item>
              <Button size={'small'} href='https://steamcommunity.com/id/Davisdog252'>
                <img src={Steam} alt='' style={{ width: 50 }}/>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm md container direction={'column'} justify={'space-around'} className={classes.contact}
              alignItems={'center'}>
          <Typography variant={'display1'}>
            Let's Get Connected
          </Typography>
          <Grid container justify={'space-around'} className={classes.test}>
            <Grid xs={6} md={4}>
              <Button variant='raised' color={'secondary'} style={{ color: 'white', minWidth: 120, marginBottom: 20}}
                      href={'mailto:rwdavisx@gmail.com'} fullWidth>
                Contact Me
              </Button>
            </Grid>
            <Grid item xs={6} md={4}>
              <Button color={'secondary'} href={Resume} fullWidth style={{marginBottom: 20}}>Resume</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Intro);