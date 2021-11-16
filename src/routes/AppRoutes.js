import React from "react";
import {Route, Switch} from "react-router-dom";
import Main from "../pages/Main/Main";
import User from "../pages/User/User";
import {useSelector} from "react-redux";
import {userSelectors} from "../store/user";

const AppRoutes = () => {
    const user = useSelector(userSelectors.getUser())
    console.log(user);
    return (
        <Switch>
            <Route exact path="/Main">
                <Main/>
            </Route>
            <Route exact path="/User/:id">
                <User/>
            </Route>
        </Switch>
    );
};

export default AppRoutes;
