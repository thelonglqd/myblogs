import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createUser } from '../actions/index';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.resetText = this.resetText.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  resetText() {
    this.setState({});
  }

  onSubmit(props) {
    this.props.createUser(props)
      .then(() => {
        this.context.router.push('/')
      })
  }

  render() {
    const { fields: { firstName, lastName, email, studentId, password }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className={`form-group ${firstName.touched &firstName.invalid ? 'has-danger' : ''}`}>
          <label>First Name</label>
          <input type="text" className="form-control" {...firstName}/>
          <div className="text-help">
            {firstName.touched ? firstName.error : ''}
          </div>
        </div>

        <div className={`form-group ${lastName.touched & lastName.invalid ? 'has-danger' : ''}`}>
          <label>Last Name</label>
          <input type="text" className="form-control" {...lastName}/>
          <div className="text-help">
            {lastName.touched ? lastName.error : ''}
          </div>
        </div>

        <div className={`form-group ${email.touched & email.invalid ? 'has-danger' : ''}`}>
          <label>Email</label>
          <input type="text" className="form-control" {...email}/>
          <div className="text-help">
            {email.touched ? email.error : ''}
          </div>
        </div>

        <div className={`form-group ${studentId.touched & studentId.invalid ? 'has-danger' : ''}`}>
          <label>Student ID</label>
          <input type="text" className="form-control" {...studentId}/>
          <div className="text-help">
            {studentId.touched ? studentId.error : ''}
          </div>
        </div>

        <div className={`form-group ${password.touched & studentId.invalid ? 'has-danger' : ''}`}>
          <label>Password</label>
          <input type="password" className="form-control" {...password}/>
          <div className="text-help">
            {password.touched ? password.error : ''}
          </div>
        </div>

        <div>
          <button type="submit" className="btn btn-primary">Signup</button>
          <button
            type="button"
            onClick={this.resetText}
            className="btn btn-warning">
            Reset
            </button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>
    )
  }
}

function validate (values) {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Firstname is required';
  }

  if (!values.lastName) {
    errors.lastName = 'Lastname is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.studentId) {
    errors.studentId = 'Student ID is required'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  }

  return errors;
}

export default reduxForm({
  form: 'Signup',
  fields: [
    'firstName',
    'lastName',
    'email',
    'studentId',
    'password'
    ],
  validate
}, null, { createUser })(Signup);