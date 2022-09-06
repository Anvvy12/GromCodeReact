import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default ({ children, title, toggler, isFull }) => {
  const arrow = isFull ? (
    <i className="fa fa-chevron-up" aria-hidden="true"></i>
  ) : (
    <i className="fa fa-chevron-down" aria-hidden="true"></i>
  );

  const info = isFull ? children : null;
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={toggler}>
          {arrow}
        </button>
        <div className="expand__content">{info}</div>
      </div>
    </div>
  );
};
