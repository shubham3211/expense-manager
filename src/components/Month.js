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
import Grid from '@material-ui/core/Grid';
import InfoCardExpense from './InfoCardExpense';
import Typography from '@material-ui/core/Typography';
import { overallSpent } from '../utils/expenseDuration'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SnackbarContent from '@material-ui/core/SnackbarContent';

class Month extends React.Component {
  constructor(props){
    super(props);
    this.distributedExpense = [];
  }

  renderInfoCard = () => this.props.category.map((category) =>
    <Grid item xs={12} style={{marginTop:"10px"}}>
      <InfoCard 
        expense={ category.count } 
        icon={ categories[category._id].icon }
        category={ category._id } 
        color={ categories[category._id].color }
        key={category._id}
      />
    </Grid>
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
        <Grid container style={{backgroundColor: "rgb(72, 72, 66)", marginTop:"0px"}}>
          <Grid item xs={4}>
            <Grid container direction="column">
              <InfoCardExpense 
                title="Overall Spent"
                value={overallSpent(this.props.moneySpent)}
                icon={MonetizationOnIcon}
                color="#f39c12"
              />
              <SnackbarContent
                message="Each Category"
                style={{backgroundColor:"#43a047", marginTop:"5px"}}
              />
              {this.renderInfoCard()}
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid container direction="column">
              <Typography variant="h5" gutterBottom style={{color:"rgb(237, 211, 130)"}}>
                Expense Timeline
              </Typography>
              <Grid item xs={12} style={{backgroundColor: "rgb(44, 48, 52)", height:"250px", overflow:"hidden"}}>
                <LineGraph distributedExpense={this.distributedExpense} duration={this.props.duration} />
              </Grid>
              <Typography variant="h5" gutterBottom style={{color:"rgb(237, 211, 130)"}}>
                Category Analyser
              </Typography>
              <Grid item xs={12} style={{backgroundColor: "rgb(44, 48, 52)", height:"320px", overflow:"hidden"}}>
                <DoughnutGraph category={this.props.category} />
              </Grid>
              <HomeTable duration={this.props.duration} />
            </Grid>
          </Grid>
        </Grid>
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