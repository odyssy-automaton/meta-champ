import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/home/Home.js';
import NewSample from './views/new-sample/NewSample.js';
import FourOhFour from './views/404/404.js';
import Explore from './views/explore/Explore.js';
import Profile from './views/profile/Profile.js';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/new-sample/:sampleId" exact component={NewSample} />
    <Route path="/explore" exact component={Explore} />
    <Route path="/profile/:address" exact component={Profile} />

    <Route path="*" component={FourOhFour} />
  </Switch>
);

export default Routes;
