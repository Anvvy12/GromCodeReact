import React from "react";
import "./styles/comment.scss";
import "./styles/styles.scss";
import moment from "moment";
import UserInfo from "./UserInfo";

const formatDate = (date) => moment(date).format("DD MMM YYYY");

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo avatarUrl={props.user.avatarUrl} name={props.user.name} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
