import React, {Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

class NavigationBar extends Component {
  render() {
    const { authenticated } = this.props.authentication;
    return (
      <div>
        {/*Navbar*/}
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                <icon className="fa fa-home"/>
              </Link>
              {authenticated ? 
              (
                <Link onClick={this.logoutHandler} to="/" className="navbar-link">
                  Logout
                </Link>
              ) : (
                <Link to="/signin" className="navbar-link">
                  Sign in/Sign up
                </Link>
              )}
              <Link to="/me" className="navbar-link">Me</Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authentication: state.authentication }
}

export default connect(mapStateToProps)(NavigationBar);