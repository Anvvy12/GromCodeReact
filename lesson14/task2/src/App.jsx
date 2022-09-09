import React from "react";
import Products from "./Products";
import Contacts from "./Contacts";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
