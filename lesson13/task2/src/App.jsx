import React from "react";
import Products from "./Products";
import Home from "./Home";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

export default () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </BrowserRouter>
    </div>
  );
};
