import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";
import moment from "moment";

const rootElem = document.querySelector("#root");

const formatDate = (date) => moment().diff(date, "years", false);

ReactDOM.render(
  <Greeting
    firstName={"John"}
    lastName={"Doe"}
    birthDate={"2001-12-25"}
    // age={birthDate}
  />,
  rootElem
);
