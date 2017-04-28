import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';
export const LOGIN = 'LOGIN';
export const RESET_FORM = 'RESET_FORM';

const ROOT_URL = 'http://localhost:3030'

export function createUser(props) {
  const request = axios.post(`${ROOT_URL}/users`, props)

  return {
    type: CREATE_USER,
    payload: request
  }
}

export function login(props) {
 const request = axios.post(`${ROOT_URL}/login`, props);

 return {
   type: LOGIN,
   payload: request
 } 
}

export function resetForm() {
  return {
    type: RESET_FORM,
    payload: {}
  }
}