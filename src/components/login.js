import React, { Component, PropTypes } from 'react';
import { reduxForm, SubmissionError } from 'redux-form';
import { login, resetForm } from '../actions/index';
import { Link } from 'react-router';

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.removeError = this.removeError.bind(this);
    this.state = { componentError: {} };
  }

  login(props) {
    this.props.login(props)
      .then((data) => {
        if (data.error) {
          this.setState({ componentError: { invalidEmail: true, message: 'Invalid email' } });
        } else {
          this.context.router.push('/');
        }
      })
  }

  removeError() {
    this.setState({ componentError: {} });
  }

  render() {
    const { fields: { email, password }, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.login.bind(this))}>
        <div className={`form-group ${(email.touched & email.invalid) || this.state.componentError.invalidEmail ? 'has-danger' : ''}`}>
          <label>Email</label>
          <input onfocus={this.removeError} type="text" className="form-control" {...email}/>
          <div className="text-help">
            {email.touched ? email.error : ''}
          </div>
          <div className="text-help">
            {this.state.componentError ? this.state.componentError.message : ''}
          </div>
        </div>

        <div className={`form-group ${password.touched & password.invalid ? 'has-danger' : ''}`}>
          <label>Password</label>
          <input type="password" className="form-control" {...password}/>
          <div className="text-help">
            {password.touched ? password.error : ''}
          </div>
        </div>

        <div>
          <button
            className="form-control"
            type="submit" className="btn btn-primary">
            Signup
          </button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
          {/*<button
            type="button"
            className="form-control"
            className="btn btn-danger">
            Cancel
          </button>*/}
        </div>
      </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}
  
  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors
}

export default reduxForm({
  form: 'Login',
  fields: ['email', 'password'],
  validate
}, null, { login })(Login);
