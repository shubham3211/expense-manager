import React from 'react';
import {expense} from '../redux/actions/expense'
import {connect} from 'react-redux';
import {distributeExpense} from '../utils/expenseDuration'
import {Line} from 'react-chartjs-2';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import styled from 'styled-components';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const chartOptions = {
  scales: {
    xAxes: [
      {
        gridLines: { 
          color: "rgb(255, 255, 255, 0.2)", 
          borderDash: [8, 4] 
        },
        ticks:{
          fontColor:"rgb(255, 255, 255, 0.7)"
        }
      }
    ],
    yAxes: [
      {
        gridLines: { 
          color: "rgb(255, 255, 255, 0.2)", 
          borderDash: [8, 4] 
        }, 
        ticks:{
         fontColor:"rgb(255, 255, 255, 0.7)"
        }
      }
    ]
  },
  axisX: {
    labelFontColor: "white"
  },
  legend: {
    display: false
  },
  animations: 'easeInBack'
}

class GraphCard extends React.Component {

  constructor(props) {
    super(props);
    this.distributedExpense = [];
  }

  StyledGrid = styled(Grid)`
    position: relative;
    top:-20px;
    margin-left:20px;
    margin-right:20px;
    background-image:linear-gradient(60deg, ${this.props.color}, ${this.props.color});
    border-radius:5px; 
    padding:15px
`;

  componentDidMount() {
    this.props.expense(this.props.duration);
  }

  totalMoneySpent = () => {
    if(this.distributedExpense.length)
    return this.distributedExpense.reduce((a,b) => a+b)
  }

  makeDataForGraph = () => {
    let labels;
    this.props.duration === 'year' ? labels = moment.monthsShort() : this.props.duration === 'week' ? labels = moment.weekdaysShort() : labels = [...Array(31).keys()];
    return {
      labels,
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgb(255, 255, 255, 0.8)',
          borderColor: 'rgb(255, 255, 255, 0.8)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgb(255, 255, 255, 0.8)',
          pointBackgroundColor: 'rgb(255, 255, 255, 0.8)',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgb(255, 255, 255, 0.8)',
          pointHoverBorderColor: 'rgb(255, 255, 255, 0.8)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.distributedExpense,
        }
      ]
    };
  }

  render() {
    this.distributedExpense = this.props.moneySpent ? distributeExpense(this.props.moneySpent, this.props.duration) : [];

    return (
      <React.Fragment>
        <Card style={{overflow:"visible"}}>
          <this.StyledGrid>
            <Line data={this.makeDataForGraph()} options={chartOptions}/>
          </this.StyledGrid>
          <CardActionArea>
            <CardContent>
              <Typography variant="h5" component="h4" color="textSecondary">
                This {this.props.duration}: $ {this.totalMoneySpent()} 
              </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </React.Fragment>
    )
  }
}

const manageStateToProps = (state, props) => {
  return {
    moneySpent: state.expense[props.duration]
  }
}

export default connect(manageStateToProps, {expense})(GraphCard);

