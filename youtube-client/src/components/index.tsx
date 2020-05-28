import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { App } from "./app/app";

require("./app/app.scss");

ReactDOM.render(
  <Router>
    <Route path="/">
      <App />
    </Route>
  </Router>,
  document.getElementById("root")
);
