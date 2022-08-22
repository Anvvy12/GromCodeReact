import React, { Component } from "react";
import Offline from "./Offline";
import Online from "./Online";

class Status extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    status: false,
  };

  a() {
    console.log(12);
    console.log(this.state.status);
    return 1222;
  }

  render() {
    return this.state.status ? <Online /> : <Offline />;
  }
}

export default Status;
