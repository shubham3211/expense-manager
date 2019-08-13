import {LOGIN} from '../../constants/';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const login = (email, password) => {
  return dispatch => {
    axios.post('http://localhost:5000/auth/signup', {
      name: 'shubham',
      email,
      password
    }).then((user) => {
      setCookies(user.data);
      dispatch({
        type: LOGIN,
        payload: user.data
      })
    })
  }
}

const setCookies = payload => {
  const {name, email, userId} = payload;
  const time = 3600*2;
  cookies.set('name', name, {
    maxAge: time
  })
  cookies.set('email', email, {
    maxAge: time
  })
  cookies.set('userId', userId, {
    maxAge: time
  })
}