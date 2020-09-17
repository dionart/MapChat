import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ExampleExample from '../../containers/ExampleExample';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ExampleExample} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
