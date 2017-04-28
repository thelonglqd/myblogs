import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PageIndex from './components/page_index';
import Signup from './components/sign_up';
import Login from './components/login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PageIndex} />
    <Route path="/domain/signup" component={Signup} />
    <Route path="/domain/login" component={Login} />
  </Route>
)