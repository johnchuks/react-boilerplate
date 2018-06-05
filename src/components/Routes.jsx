import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Sample from './Sample.jsx';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/sample' component={Sample} />
    </Switch>
  </BrowserRouter>
)
export default Routes;
