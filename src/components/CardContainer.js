import React from 'react';
import GraphCard from './GraphCard';

class CardContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GraphCard duration="month" />
        <GraphCard duration="day" />
        <GraphCard duration="year" />
      </React.Fragment>
    )
  }
}

export default CardContainer;