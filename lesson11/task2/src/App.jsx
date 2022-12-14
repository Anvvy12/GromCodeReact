import React, { Component } from "react";

import Dialog from "./Dialog";

export default class extends Component {
  state = {
    isOpen: false,
  };
  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };
  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    const elem =
      "Use immutable array methods to work with data. It will help to avoid bugs";
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show dialog
        </button>
        <Dialog
          isOpen={this.state.isOpen}
          title={"Recommendation"}
          onClose={this.hideDialog}
        >
          <p>
            Use immutable array methods to work with data. It will help to avoid
            bugs
          </p>
        </Dialog>
      </div>
    );
  }
}
