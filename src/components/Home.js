import React from 'react';
import CardContainer from './CardContainer';
import { Grid, Container } from '@material-ui/core';
import HomeTable from './HomeTable';
import AddExpenseDialog from './AddExpenseDialog';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container style={{backgroundColor: "#eee", overflow: "hidden"}}>
          <CardContainer />
          <HomeTable duration="year" />
          <AddExpenseDialog />  
        </Grid>
      </React.Fragment>
    )
  }
}

export default Home;