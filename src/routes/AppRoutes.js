import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main/Main";
import User from "../pages/User/User";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/Main">
        <Main />
      </Route>
      <Route exact path="/User">
        <User nickname="Sladkiy_bubalekh" description="Hello everyone" />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
