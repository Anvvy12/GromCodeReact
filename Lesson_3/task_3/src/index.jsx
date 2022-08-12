import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import Comment from "./Comments";

const rootElem = document.querySelector("#root");

const normalDate = (date) => {
  return `${date.getDay()} ${date.toLocaleString("en", {
    month: "long",
  })} ${date.getFullYear()}`;
};

const userInfo = {
  name: "Tom",
  avatarUrl:
    "https://images.sftcdn.net/images/t_app-logo-xl,f_auto/p/31e24716-8dd4-4de2-bd4a-8f888bc42d01/2028187188/path-of-building-logo.png",
};

ReactDOM.render(
  <Comment user={userInfo} text="Good jop!" date={normalDate(new Date())} />,
  rootElem
);
