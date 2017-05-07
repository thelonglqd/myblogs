import {COMMENT, SIGNIN} from './types';

const admin = {
  email: 'admin@gmail.com',
  password: 'admin123'
}

const user = {
  email: 'user@gmail.com',
  password: 'user123'
}

export function makeComment(comment) {
  return {type: COMMENT, payload: {
      comment
    }}
}

export function signin(props, dispatch) {
  return {
    type: SIGNIN,
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        if (props.email !== admin.email && props.email !== user.email) {
          reject({email: 'email does not existed'});
        }
        if (props.password !== admin.password && props.password !== user.password) {
          reject({password: 'password is incorrect'});
        }
        resolve();
      }, 500); // simulate server lantency
    })
  };
}