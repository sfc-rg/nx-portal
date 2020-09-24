import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "normalize.css";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import "./i18n";

ReactDOM.render(
    <Suspense fallback={<></>}>
        <Router />
    </Suspense>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
