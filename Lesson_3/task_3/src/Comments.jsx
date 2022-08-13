import React from "react";
import "./styles/comment.scss";

const normalDate = (date) => {
  return `${date.getDay()} ${date.toLocaleString("en", {
    month: "long",
  })} ${date.getFullYear()}`;
};

// const formatDate = (date) => moment(date).format("DD MMM YYYY");

function Comment(props) {
  return (
    <div className="comment">
      <div className="user-info">
        <img
          className="avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
        <div className="user-info__name">{props.user.name}</div>
      </div>
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{normalDate(props.date)}</div>
    </div>
  );
}

export default Comment;
