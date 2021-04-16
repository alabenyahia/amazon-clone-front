import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";

function Routes(props) {
    return (
        <Switch>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <PrivateRoute path="/" component={Home} />
        </Switch>
    );
}

export default Routes;
