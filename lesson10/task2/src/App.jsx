import React, { Component } from "react";
import Profile from "./Profile";
import ShoppingCart from "./ShoppingCart";

export default class extends Component {
  state = {
    userDate: {
      firstName: "John",
      lastName: "Doe",
    },
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      userDate: {
        ...this.state.userDate,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div className="page">
        <main className="content">
          <ShoppingCart
            userDate={this.state.userDate}
            userLastName={this.props.userDate}
          />
          <Profile
            userDate={this.state.userDate}
            handleChange={this.handleChange}
          />
        </main>
      </div>
    );
  }
}
