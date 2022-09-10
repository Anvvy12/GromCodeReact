import React from "react";
import ConnectionStatus from "./ConnectionStatus";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default () => {
  const a = () => {
    console.log("12");
  };
  return <ConnectionStatus>{a}</ConnectionStatus>;
};
