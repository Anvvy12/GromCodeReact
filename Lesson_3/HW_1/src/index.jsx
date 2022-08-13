import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";

const rootElem = document.querySelector("#root");

const getAge = () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dob = new Date(2022, 9, 31);
  const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  let age;
  age = today.getFullYear() - dob.getFullYear();
  if (today < dobnow) {
    age === 0 ? age : age - 1;
  }
  return age;
};
getAge();

ReactDOM.render(
  <Greeting firstName={"Mark"} lastName={"Nikoda"} age={getAge()} />,
  rootElem
);
