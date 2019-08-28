import React from 'react';
import { Line } from 'react-chartjs-2';

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

export default (props) => {

  const makeDataForLineGraph = () => {
    let labels = [...Array(31).keys()];
    
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
          data: props.distributedExpense,
        }
      ]
    };
  }

  return (
    <Line data={makeDataForLineGraph()} />
  )
}