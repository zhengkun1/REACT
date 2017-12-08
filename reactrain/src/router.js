import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Basiclayout from './layouts/Basiclayout';
import Userlayout from './layouts/Userlayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/user" component={Userlayout} />
        <Route path="/" component={Basiclayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
