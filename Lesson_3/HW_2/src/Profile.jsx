import React from "react";
import moment from "moment";
import "./styles.css";

const time = (date) => moment(date).format("DD MMM YY");

export default (props) => {
  return (
    <div className="profile">
      <div className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</div>
      <div className="profile__birth">{`Was born ${time(
        props.userData.birthDate
      )} in ${props.userData.birthPlace}`}</div>
    </div>
  );
};
