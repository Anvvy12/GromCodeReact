import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: props.isLogin,
    };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    return this.setState({ isLogin: true });
  }

  handleLogoutClick() {
    return this.setState({ isLogin: false });
  }

  showSpinner() {
    setTimeout(() => {
      return <Spinner />;
    }, 2000);
  }

  render() {
    let button;
    if (this.state.isLogin) {
      button = <Logout onLogout={this.handleLogoutClick} />;
    } else {
      button = <Login onLogin={this.handleLoginClick} />;
    }

    return button;
  }
}

export default Auth;
