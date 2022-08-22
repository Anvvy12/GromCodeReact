import React, { Component } from "react";
import Greeting from "./Greeting";
import Login from "./Login";
import Logout from "./Logout";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    // const button = this.state.isLoggedIn ? (
    //   <button className="btn logout" onClick={this.handleLogout}>
    //     Logout
    //   </button>
    // ) : (
    //   <button className="btn login" onClick={this.handleLogin}>
    //     Login
    //   </button>
    // );

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <button className="btn logout" onClick={this.handleLogout}>
            Logout
          </button>
        ) : (
          <button className="btn login" onClick={this.handleLogin}>
            Login
          </button>
        )}
      </div>
    );
  }
}
