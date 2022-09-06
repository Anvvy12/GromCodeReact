import React, { Component } from "react";
import Expand from "./Expand";

export default class extends Component {
  state = {
    isFull: false,
  };

  toggleInfo = () => {
    this.setState({
      isFull: !this.state.isFull,
    });
  };

  render() {
    return (
      <div className="app">
        <Expand
          title={"Some title"}
          toggler={this.toggleInfo}
          isFull={this.state.isFull}
        >
          <div className="expand__content">
            <p>
              Hooks are a new addition in React 16.8. They let you use state and
              other React features without writing a class.
            </p>
        </Expand>
      </div>
    );
  }
}
