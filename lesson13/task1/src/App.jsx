import React from "react";
import Products from "./Products";
import Contacts from "./Contacts";
import Home from "./Home";
import PageNotFound from "./PageNotFound";

export default () => {
  return (
    <div className="page">
      <Products />
      <Contacts />
      <Home />
      <PageNotFound />
    </div>
  );
};
