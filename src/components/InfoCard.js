import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    maxWidth: 410,
  },
  image: {
    width: 128,
    height: 120,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  barColorPrimary: {
    backgroundColor: '#fff',
  },
})(LinearProgress);

export default (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} style={{backgroundColor: props.color}}>
        <Grid container>
          <Grid item style={{backgroundColor:"rgba(0,0,0,0.2)"}}>
            <ButtonBase className={classes.image}>
              <props.icon fontSize="large" style={{color: "#fff"}} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm containerz>
            <Grid item xs container direction="column">
              <Grid item xs>
                <Typography variant="h6" style={{color:"#fff", margin:"10px"}}>
                  {props.category.toUpperCase()}
                </Typography>
                <Typography variant="subtitle1" style={{color:"#fff", margin:"10px", fontWeight:"bold", fontSize: "18px"}}>
                  {props.expense}
                </Typography>
                <ColorLinearProgress variant="determinate" value={props.expense} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}