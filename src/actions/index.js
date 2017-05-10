import {
  COMMENT,
  SIGNIN,
  SIGNIN_SUCCESS,
  FETCH_MY_INFO
} from './types';

const admin = {
  email: 'admin@gmail.com',
  password: 'admin123'
}

const user = {
  email: 'user@gmail.com',
  password: 'user123'
}

const emails = ['admin@gmail.com', 'user@gmail.com'];
const passwords = ['123456']

export function makeComment(comment) {
  return {type: COMMENT, payload: {
      comment
    }}
}

export function onSigninSuccessHandler() {
  return {
    type: SIGNIN_SUCCESS,
    payload: {
      authenticated: true
    }
  };
}

export function fetchMyInfo() {
  return {
    type: FETCH_MY_INFO,
    payload: { }
  }
}