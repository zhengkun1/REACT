import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Basiclayout from './layouts/Basiclayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Basiclayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
