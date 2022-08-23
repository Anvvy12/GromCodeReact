import React from "react";

export default (props) => {
  return (
    <button className="btn logout" onClick={props.onLogout}>
      Logout
    </button>
  );
};
