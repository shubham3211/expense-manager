import React from 'react';
import CardContainer from './CardContainer';
import { Container } from '@material-ui/core';
import HomeTable from './HomeTable';
import AddExpenseDialog from './AddExpenseDialog';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <CardContainer />
          <HomeTable duration="year" />
          <AddExpenseDialog />
        </Container>
      </React.Fragment>
    )
  }
}

export default Home;