import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import Checkout from "./pages/Checkout";

function Routes(props) {
    return (
        <Switch>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <PrivateRoute path="/checkout" component={Checkout} />
            <Route path="/search/:q">
                <Home />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default Routes;
