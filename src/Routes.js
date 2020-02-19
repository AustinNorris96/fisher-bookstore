import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Books from "./Books/Books";
import Authors from "./Authors/Authors";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Books" component={Books} />
            <Route path="/Authors" component={Authors} />
        </Switch>
    );
}