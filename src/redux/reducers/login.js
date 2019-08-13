import {LOGIN} from '../../constants';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const initState = {
  email: cookies.get('email'),
  name: cookies.get('name'),
  userId: cookies.get('userId')
}

console.log('cookies', cookies);

const login = (state = initState, action) => {
  switch(action.type){
    case LOGIN: 
      return action.payload;
    default:
      return state;
  }
}

export default login;