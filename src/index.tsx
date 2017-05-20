
import "bootstrap/scss/bootstrap.scss";
import "./styles/entry.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers";

import { App } from "./components/App";

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);