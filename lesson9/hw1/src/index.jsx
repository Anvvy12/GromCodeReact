import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./UsersList";
import "./styles/index.scss";

const rootElement = document.querySelector("#root");

const usersList = [
  {
    name: "Tad",
    age: 18,
    id: "0",
  },
  {
    name: "Anna",
    age: 45,
    id: "1",
  },
  {
    name: "Mark",
    age: 22,
    id: "2",
  },
  {
    name: "Sara",
    age: 2,
    id: "3",
  },
  {
    name: "Ben",
    age: 90,
    id: "4",
  },
  {
    name: "John",
    age: 3,
    id: "3",
  },
];

ReactDOM.render(<UsersList users={usersList} />, rootElement);
