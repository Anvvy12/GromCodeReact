import React from "react";

export default class extends React.Component {
  hendlerClick(event) {
    alert(event.target.textContent);
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.hendlerClick}>
        Click on me!
      </button>
    );
  }
}
