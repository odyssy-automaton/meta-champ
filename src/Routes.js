import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/home/Home.js";
import NewCrop from "./views/new-crop/NewCrop.js";
import FourOhFour from "./views/404/404.js";
import Explore from "./views/explore/Explore.js";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/new-crop" exact component={NewCrop} />
    <Route path="/explore" exact component={Explore} />

    <Route path="*" component={FourOhFour} />
  </Switch>
);

export default Routes;