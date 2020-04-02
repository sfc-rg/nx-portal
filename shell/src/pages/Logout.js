import React from "react";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
    render() {
        localStorage.removeItem("RefreshToken");
        localStorage.removeItem("AccessToken");
        localStorage.clear();

        return (
            <>
                <Redirect to={"/"} />
            </>
        );
    }
}

export default Logout;
