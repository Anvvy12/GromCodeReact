import React, { Component } from "react";
import Clock from "./Clock";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.visible && (
          <>
            <Clock location={"New York"} offset={-4} />
            <Clock location={"Kyiv"} offset={3} />
            <Clock location={"London"} offset={1} />
          </>
        )}
      </>
    );
  }
}
