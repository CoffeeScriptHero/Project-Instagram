import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "../pages/Main/Main";
import User from "../pages/User/User";
import {useSelector} from "react-redux";
import {userSelectors} from "../store/user";

const AppRoutes = () => {
    const {user} = useSelector(userSelectors.getUser())
    return (
        <Switch>
            <Route exact path="/Main">
                <Main/>
            </Route>
            <Route exact path="/User/:id">
                <User user={user}/>
            </Route>
            <Redirect from="/" to="/Main"/>
        </Switch>
    );
};

export default AppRoutes;
