import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { VirtualListScroll } from "./components/VirtualListScroll";
import IOSavings from "./components/IOSavings";
import Layout from "./components/Layout/Layout";

const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router history={history}>
      <Layout>
        <Switch>
          <Route
            path="/virtual-list-scroll"
            exact
            component={VirtualListScroll}
          />

          <Route path="/iosavings" exact component={IOSavings} />

          <Route path="/" exact component={App} />
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
