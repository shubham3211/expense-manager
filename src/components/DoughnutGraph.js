import React from 'react';
import { categories } from '../utils/category';
import { Doughnut } from 'react-chartjs-2';

export default (props) => {

  const makeDataForDoughnutGraph = () => {
    let labels = props.category.map((category) => category._id);
    let data = props.category.map((category) => category.count);
    let backgroundColor = props.category.map((category) => categories[category._id].color)
    return {
      labels,
      datasets: [{
        data,
        backgroundColor,
        hoverBackgroundColor: backgroundColor
      }]
    }
  }

  return (
    <Doughnut data={makeDataForDoughnutGraph()} options={{ maintainAspectRatio: false }} />
  )
}