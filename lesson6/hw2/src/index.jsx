import React from "react";
import ReactDOM from "react-dom";
import Auth from "./Auth";
import "./styles/index.scss";

const rootElem = document.querySelector("#root");

ReactDOM.render(<Auth isLogin={false} />, rootElem);
