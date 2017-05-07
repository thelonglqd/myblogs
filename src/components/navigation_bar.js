import React, {Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false };
  }

  componentWillReceiveProps(nextProps) {
    console.log('this.props: ', this.props);
    if (!this.props.signinFormFailed) {
      this.setState({ authenticated: true });
    }
  }

  render() {
    return (
      <div>
        {/*Navbar*/}
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                <icon className="fa fa-home"/>
              </Link>
              <Link to="/signin" className="navbar-link">
                {this.state.authenticated ? `Logout` : `Sign in/Sign up`}
              </Link>
              <Link to="/me" className="navbar-link">Me</Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    signinFormFailed: state.form.SigninForm
    ? state.form.SigninForm._submitFailed 
    : true }
}

export default connect(mapStateToProps)(NavigationBar);