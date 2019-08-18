import {EXPENSE_MONTH, EXPENSE_YEAR, EXPENSE_DAY} from '../../constants';
import axios from 'axios';

axios.defaults.withCredentials = true;

export const expense = (duration) => {
  duration = duration.toLowerCase();
  let type = duration === 'day' ? EXPENSE_DAY : duration === 'year' ? EXPENSE_YEAR : EXPENSE_MONTH;
  return dispatch => {
    axios.get(`http://localhost:5000/expense/duration/${duration}`)
      .then((expense) => {
        dispatch({
          type,
          payload: expense.data
        })
      })
  } 
}
