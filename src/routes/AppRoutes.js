import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main/Main";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
