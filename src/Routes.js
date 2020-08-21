import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings"
import AuthenticatedRoute from "./sharedComponents/AuthenticatedRoute";
import UnauthenticatedRoute from "./sharedComponents/UnauthenticatedRoute";

export default function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <UnauthenticatedRoute exact path="/login">
                    <Login />
                </UnauthenticatedRoute>
                <UnauthenticatedRoute exact path="/signup">
                    <Signup />
                </UnauthenticatedRoute>
                <AuthenticatedRoute exact path="/settings">
                    <Settings />
                </AuthenticatedRoute>

                <AuthenticatedRoute exact path="/notes/new">
                    <NewNote />
                </AuthenticatedRoute>

                <AuthenticatedRoute exact path="/notes/:id">
                    <Notes />
                </AuthenticatedRoute>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}