import React from "react";
import {
    BrowserRouter as Switch,
    Route,
    BrowserRouter
} from "react-router-dom";

// Import pages
import App from "./App";
import Meetings from "./Meetings";
import WIP from "./WIP";
import TERM from "./TERM";
import Blog from "./Blog";
import Thesis from "./Thesis";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";
import LicenseDoc from "./pages/License";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/meetings" component={Meetings} />
                <Route exact path="/wip" component={WIP} />
                <Route exact path="/term" component={TERM} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/thesis" component={Thesis} />

                <Route path="/m/signin" component={Login} />
                <Route path="/m/signup" component={SignUp} />
                <Route path="/m/logout" component={Logout} />

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
