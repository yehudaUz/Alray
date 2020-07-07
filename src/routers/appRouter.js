import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../components/Main'
import PageNotFound from '../components/PageNotFound'


const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path={["/"]} component={Main} />
      {/* <Route path='/login' component={Login} /> */}
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default AppRouter; 