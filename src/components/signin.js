import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { signin } from '../actions';
import { browserHistory } from 'react-router';

class Signin extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSignin = (props) => {
    this.props.signin(props)
      .then(() => {
        this.context.router.push('/');
      })
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
        <form onSubmit={handleSubmit(this.onSignin)}>
          <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
            <input type="text" className="form-control" placeholder="example@gmail.com" {...email}  />
            <div className="text-help">
              {email.touched ? email.error : ''}
            </div>
          </div>
          <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
            <input type="password" className="form-control" placeholder="password" {...password} />
            <div className="text-help">
              {password.touched ? password.error : ''}
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
  validate,
  onSubmitSuccess: () => {
    console.log('come to submit success function');
    browserHistory.push('/')
  },
  onSubmitFail: () => {
    console.log('submit failed !!!');
  }
}, mapStateToProps, { signin })(Signin);