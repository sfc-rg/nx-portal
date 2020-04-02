import React from "react";
import {
    BrowserRouter as Switch,
    Route,
    BrowserRouter
} from "react-router-dom";

// Import pages
import App from "./App";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";
import LicenseDoc from "./pages/License";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import TimeCard from "./pages/TimeCard";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/m/signin" component={Login} />
                <Route path="/m/signup" component={SignUp} />
                <Route path="/m/logout" component={Logout} />
                <Route path="/app/time" component={TimeCard} />
                <Route
                    path="/page/terms-and-conditions"
                    component={LicenseDoc}
                />
                <Route path="/page/privacy-policy" component={PrivacyPolicy} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
