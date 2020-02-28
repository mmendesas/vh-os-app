import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users/:id" component={User} />
      <Route path="/users" component={User} />
    </Switch>
  );
}
