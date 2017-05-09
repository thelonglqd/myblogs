import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { signin, onSigninSuccessHandler } from '../actions';
import { browserHistory, router } from 'react-router';

class Signin extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSignin = (values, dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!['admin@gmail.com', 'user@gmail.com'].includes(values.email)) {
          reject({email: 'User does not exist', _error: 'Login failed!'})
        } else if (values.password !== '123456') {
          reject({password: 'Wrong password', _error: 'Login failed!'})
        } else {
          this.context.router.push('/');
          this.props.onSigninSuccessHandler()
          resolve();      
        }
      }, 500) // simulate server latency
    });
  }

  render() {
    const { fields: { email, password, confirmation }, handleSubmit } = this.props;
    return (
      <div>
        <h3>Sign in / Sign up</h3>
        <a className="btn btn-block btn-social btn-github">
          <span className="fa fa-github"></span>
          Sign in with Github
        </a>
        <a className="btn btn-block btn-social btn-facebook">
          <span className="fa fa-facebook"></span>
          Sign in with Facebook
        </a>
        <a className="btn btn-block btn-social btn-google">
          <span className="fa fa-google"></span>
          Sign in with Google
        </a>
        <form onSubmit={this.props.handleSubmit(this.onSignin)}>
          <div className={`form-group ${email.touched && email.dirty && email.invalid ? 'has-danger' : ''}`}>
            <input type="text" className="form-control" placeholder="example@gmail.com" {...email}  />
            <div className="text-help">
              {email.touched && email.dirty ? email.error : ''}
            </div>
          </div>
          <div className={`form-group ${password.touched && password.dirty && password.invalid ? 'has-danger' : ''}`}>
            <input type="password" className="form-control" placeholder="password" {...password} />
            <div className="text-help">
              {password.touched && password.dirty ? password.error : ''}
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="re-type password" {...confirmation} />
          </div>
          <button type="submit" className="btn btn-primary">Signin</button>
          <button className="btn btn-primary">Signup</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  
  if(!values.email) errors.email = 'Email is required';
  if (!values.password) errors.password = 'Password is required';

  return errors;
}

function mapStateToProps(state) {
  return {
    form: state.form
  }
}

export default reduxForm({
  form: 'SigninForm',
  fields: ['email', 'password', 'comfirmation'],
  validate
}, mapStateToProps, { signin, onSigninSuccessHandler })(Signin);