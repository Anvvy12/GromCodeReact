import React from "react";
import ReactDOM from "react-dom";
import Mailbox from "./Mailbox";
import "./styles/index.scss";

const rootElem = document.querySelector("#root");

ReactDOM.render(<Mailbox unreadMessages={[1, 2]} />, rootElem);
