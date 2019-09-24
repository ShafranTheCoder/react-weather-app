import React from "react";
import { Switch, Route } from "react-router-dom";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import WeatherByCityName from "../WeatherByCityName/WeatherByCityName";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={WeatherInfo} />
    <Route path="/kiev" component={WeatherByCityName} />
    <Route path="/moscow" component={WeatherByCityName} />
  </Switch>
);

export default Routes;
