import { SIGNIN_SUCCESS } from '../actions/types';

const INITAL_STATE = { authenticated: false };

export default function (state=INITAL_STATE, action) {
  if (action.type === SIGNIN_SUCCESS) {
    console.log('second action for signin: ', action);
    return action.payload;
  }
  return state;
}