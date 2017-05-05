import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import PostDetail from './components/post_detail';
import Signin from './components/signin';
import Me from './components/me';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/posts/:postid" component={PostDetail}/>
    <Route path="/signin" component={Signin}/>
    <Route path="/me" component={Me}/>
  </Route>
)