import React from "react";

export default class extends React.Component {
  changeStatus = (event) => {
    event.target.textContent === "Off"
      ? (event.target.textContent = "On")
      : (event.target.textContent = "Off");
  };

  render() {
    return (
      <div className="toggler" onClick={this.changeStatus}>
        Off
      </div>
    );
  }
}
