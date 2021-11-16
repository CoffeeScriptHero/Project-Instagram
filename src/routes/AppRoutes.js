import React from "react";
import {Route, Switch} from "react-router-dom";
import Main from "../pages/Main/Main";
import User from "../pages/User/User";
import {useSelector} from "react-redux";
import {userSelectors} from "../store/user";

const AppRoutes = () => {
    const user = useSelector(userSelectors.getUser())
    console.log("user", user);
    console.log("user._id", user._id);
    return (
        <Switch>
            <Route exact path="/Main">
                <Main/>
            </Route>
            <Route exact path="/User/:id">
                <User userId={user._id}/>
            </Route>
        </Switch>
    );
};

export default AppRoutes;
