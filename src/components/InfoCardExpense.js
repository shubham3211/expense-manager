import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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

export default (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} >
        <Grid container>
          <Grid item style={{backgroundColor: props.color}}>
            <ButtonBase className={classes.image}>
              <props.icon fontSize="large" style={{color: "#fff"}} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm containerz>
            <Grid item xs container direction="column">
              <Grid item xs>
                <Typography variant="h6" style={{margin: "10px", fontSize: "18px"}}>
                  {props.title.toUpperCase()}
                </Typography>
                <Typography variant="subtitle1" style={{margin: "10px", fontWeight: "bold", fontSize: "18px"}}>
                  {props.value}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}