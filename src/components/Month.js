import React from 'react';
import { expense } from '../redux/actions/expense';
import { connect } from 'react-redux';
import { distributeExpense } from '../utils/expenseDuration'
import HomeTable from './HomeTable'
import DoughnutGraph from './DoughnutGraph'
import { expenseCategory } from '../redux/actions/expenseCategory';
import InfoCard from './InfoCard'
import { categories } from '../utils/category'
import LineGraph from './LineGraph';

class Month extends React.Component {
  constructor(props){
    super(props);
    this.distributedExpense = [];
  }

  renderInfoCard = () => this.props.category.map((category) =>
    <InfoCard expense={ category.count } icon={ categories[category._id].icon } category={ category._id } color={ categories[category._id].color } />
  )
  
  componentDidMount() {
    this.props.expense(this.props.duration);
    this.props.expenseCategory(this.props.duration);
  }

  render() {
    this.distributedExpense = this.props.moneySpent ? distributeExpense(this.props.moneySpent, this.props.duration) : [];

    if(!this.props.moneySpent || !this.props.category){
      return (<div>Loading...</div>)
    }

    return (
      <React.Fragment>
        <div style={{backgroundColor:"black"}}>
          <LineGraph distributedExpense={this.distributedExpense} />
          <HomeTable duration={this.props.duration} />
          <DoughnutGraph category={this.props.category} />
          {this.renderInfoCard()}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    moneySpent: state.expense[props.duration],
    category: state.expenseCategory[props.duration]
  }
}

export default connect(mapStateToProps, { expense, expenseCategory })(Month);