import React, { useState } from "react";
import { createContainer } from "unstated-next";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Route } from "react-router-dom";

// Authenticator Provider Create Section
// --------------------------------------------------------------------------------------------------------
function useAuthenticator(
    initialState = { authToken: "none", isLoggedIn: false }
) {
    let [auth, setAuthorization] = useState(initialState);

    let login = () => {
        if (this.state.authToken !== "none")
            localStorage.setItem("AccessToken", auth.authToken);
        setAuthorization({
            authToken: localStorage.getItem("AccessToken"),
            isLoggedIn: true
        });
    };

    let logout = () => {
        setAuthorization({
            authToken: "none",
            isLoggedIn: false
        });
    };

    return { auth, login, logout };
}

export const Authenticator = createContainer(useAuthenticator);

// Authenticator Switch Base View
// --------------------------------------------------------------------------------------------------------
export class AuthSwitchView extends React.Component {
    constructor(props) {
        super(props);

        if (localStorage.getItem("AccessToken") !== null) {
            this.state = {
                AuthBearToken: localStorage.getItem("AccessToken"),
                IsAuthorized: true
            };
        } else {
            this.state = {
                AuthBearToken: "none",
                IsAuthorized: false
            };
        }
    }

    isAuthorized() {
        return this.state.IsAuthorized;
    }

    render() {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log(this.state.IsAuthorized);
        return (
            <Authenticator.Provider isAuthorized={this.isAuthorized}>
                {this.props.children}
            </Authenticator.Provider>
        );
    }
}

export class AuthOnlyView extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem("AccessToken") !== null) {
            this.state = {
                AuthBearToken: localStorage.getItem("AccessToken")
            };
        } else {
            this.state = {
                AuthBearToken: "none"
            };
        }
    }

    render() {
        return (
            <Authenticator.Provider>
                {(() => {
                    if (this.state.AuthBearToken !== "none") {
                        return this.props.children;
                    } else {
                        if (this.props.elseComponent !== undefined) {
                            return this.props.elseComponent;
                        }
                    }
                })()}
            </Authenticator.Provider>
        );
    }
}

// Authentication Reauired Base View
// --------------------------------------------------------------------------------------------------------
export class AuthRequired extends React.Component {
    constructor(props) {
        super(props);

        if (localStorage.getItem("AccessToken") !== null) {
            this.state = {
                AuthBearToken: localStorage.getItem("AccessToken")
            };
        } else {
            this.state = {
                AuthBearToken: "none"
            };
        }
    }

    render() {
        return (
            <Authenticator.Provider>
                {this.state.AuthBearToken !== "none" ? (
                    this.props.children
                ) : (
                    <Redirect to={"/m/signin"} />
                )}
            </Authenticator.Provider>
        );
    }
}

// Authentication Redirect View
// --------------------------------------------------------------------------------------------------------s
class AuthRedirect extends React.Component {
    render() {
        return <Redirect to={"/m/signin"} />;
    }
}

export class AuthRequiredRoute extends AuthRequired {
    render() {
        return (
            <Authenticator.Provider>
                {this.state.AuthBearToken !== "none" ? (
                    <Route children={this.props.children} />
                ) : (
                    <Route
                        path={this.props.children}
                        component={AuthRedirect}
                    ></Route>
                )}
            </Authenticator.Provider>
        );
    }
}
