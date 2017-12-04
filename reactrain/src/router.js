import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Basiclayout from './layouts/Basiclayout';
import Userlayout from './layouts';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Basiclayout} />
        <Route path="/userinfo" component={Userlayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
