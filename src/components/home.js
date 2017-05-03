import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

export default class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            post 1 content
            <Link to="/post/1">Continue reading ...</Link>
          </li>
          <li>
            post 2 content
            <Link to="/post/2">Continue reading ...</Link>
          </li>
        </ul>
      </div>
    );
  }
}
