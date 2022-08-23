import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      showSpinner: false,
    };
  }

  handleLoginClick = () => {
    this.setState({
      showSpinner: true,
    });

    setTimeout(() => {
      this.setState({
        showSpinner: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.showSpinner) {
      return <Spinner />;
    }
    return this.state.isLoggedIn ? (
      <Logout onLogout={this.handleLogoutClick} />
    ) : (
      <Login onLogin={this.handleLoginClick} />
    );
  }
}

export default Auth;
