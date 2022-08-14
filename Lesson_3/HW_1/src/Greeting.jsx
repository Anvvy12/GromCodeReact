import React from "react";
import "./index.scss";

export default (props) => {
  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${props.birthDate} years old`}</div>
  );
};
