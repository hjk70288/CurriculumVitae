import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
