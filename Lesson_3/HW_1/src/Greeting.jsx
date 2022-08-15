import React from "react";
import moment from "moment";
import "./index.css";

const formatDate = (date) => moment().diff(date, "years", false);

export default (props) => {
  return (
    <div className="greeting">{`My name is ${props.firstName} ${
      props.lastName
    }. I'm ${formatDate(props.birthDate)} years old`}</div>
  );
};
