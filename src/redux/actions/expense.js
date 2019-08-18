import {EXPENSE_MONTH, EXPENSE_YEAR, EXPENSE_WEEK} from '../../constants';
import axios from 'axios';

axios.defaults.withCredentials = true;

export const expense = (duration) => {
  duration = duration.toLowerCase();
  let type = duration === 'week' ? EXPENSE_WEEK : duration === 'year' ? EXPENSE_YEAR : EXPENSE_MONTH;
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
