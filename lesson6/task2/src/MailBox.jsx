import React from "react";

export default ({ unreadMessage }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>
      {unreadMessage.length > 0 && (
        <span className="mailbox__count">{unreadMessage.length}</span>
      )}
    </div>
  );
};
