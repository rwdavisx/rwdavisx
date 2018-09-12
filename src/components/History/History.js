import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    height: 500
  }
});

class History extends React.Component {
  state = {
    activeStep: 0
  };

  handleInc = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    return (
      <Grid container component='section' className={classes.root}>
        <Grid item>
          <Stepper activeStep={activeStep} orientation='vertical'>
            <Step>
              <StepLabel>The Beginning</StepLabel>
              <StepContent>
                <Typography variant='title'>January 15, 1995 - Indianapolis, Indiana</Typography>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Growing Up</StepLabel>
              <StepContent>
                <Typography variant='title'>Valpo -> Fishers</Typography>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>High School</StepLabel>
              <StepContent>
                <Typography variant='title'>January 15, 1995 - Indianapolis, Indiana</Typography>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>College</StepLabel>
              <StepContent>
                <Typography variant='title'>January 15, 1995 - Indianapolis, Indiana</Typography>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Professional Career</StepLabel>
              <StepContent>
                <Typography variant='title'>January 15, 1995 - Indianapolis, Indiana</Typography>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Looking Forward</StepLabel>
              <StepContent>
                <Typography variant='title'>January 15, 1995 - Indianapolis, Indiana</Typography>
              </StepContent>
            </Step>
          </Stepper>
          <Button onClick={this.handleInc}>
            Meh
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(History)