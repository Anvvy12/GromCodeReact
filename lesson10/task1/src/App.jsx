import React, { Component } from "react";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    this.fetchUserData(this.props.userid);
  }

  fetchUserData(id) {
    const userUrl = `https://api.github.com/users/${id}`;
    fetch(userUrl)
      .then((date) => date.json())
      .then((userData) => this.setState({ userData }));
  }

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
