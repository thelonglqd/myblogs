import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        {/*Navbar*/}
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                <icon className="glyphicon glyphicon-home"/>
              </Link>
              <Link to="/signin" className="navbar-link" href="#">Sign in/Sign up</Link>
              <Link to="/me" className="navbar-link" href="#">Me</Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}