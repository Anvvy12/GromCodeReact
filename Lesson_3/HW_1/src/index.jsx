import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";

const rootElem = document.querySelector("#root");

const getAge = (dob = new Date(1990, 9, 31)) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  let age = today.getFullYear() - dob.getFullYear();
  if (today < dobnow) {
    age === 0 ? age : age - 1;
  }
  return age;
};
getAge();

ReactDOM.render(
  <Greeting
    firstName={"Mark"}
    lastName={"Nikoda"}
    birthDate={getAge(new Date(2010, 9, 31))}
    // age={birthDate}
  />,
  rootElem
);
