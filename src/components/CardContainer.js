import React from 'react';
import GraphCard from './GraphCard';
import Grid from '@material-ui/core/Grid';

class CardContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={4} style={{marginTop:"100px"}}>
          <Grid item xs={4}>
            <GraphCard duration="month" />
          </Grid>
          <Grid item xs={4}>
            <GraphCard duration="week" />
          </Grid>
          <Grid item xs={4}>
            <GraphCard duration="year" />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default CardContainer;