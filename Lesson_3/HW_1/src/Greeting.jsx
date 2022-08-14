import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";
import moment from "moment";
import "./index.scss";

const rootElem = document.querySelector("#root");

const formatDate = (date) => moment().diff(date, "years", false);

export default (props) => {
  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${props.birthDate} years old`}</div>
  );
};

ReactDOM.render(
  <Greeting
    firstName={"John"}
    lastName={"Doe"}
    birthDate={formatDate("2004-09-17")}
    // age={birthDate}
  />,
  rootElem
);
