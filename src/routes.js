import React, { useContext, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Follower } from './context/Follower';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Followers from './pages/Followers';
import Repos from './pages/Repos';
import Following from './pages/Following';
// import { Container } from './styles';

function Routes() {
  const { follower } = useContext(Follower);
  let Component;
  if(follower) {
    Component = Dashboard;
  }else {
    Component = Followers;
  }
  
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/followers" component={Component}></Route>
            <Route exact path="/following" component={Following}></Route>
            <Route exact path="/repos" component={Repos}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;