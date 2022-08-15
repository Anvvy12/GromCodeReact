import React from "react";
import moment from "moment";
import "./styles.css";

const time = (date) => moment(date).format("DD MMM YY", false);

export const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile__name">{`${props.user.firstName} ${props.user.lastName}`}</div>
      <div className="profile__birth">{`Was born ${time(
        props.user.birthDate
      )} in ${props.user.birthPlace}`}</div>
    </div>
  );
};
