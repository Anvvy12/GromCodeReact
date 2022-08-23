import React, { Component } from "react";
import User from "./User";

export default class extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    sorting: null,
  };

  toggleSorting = () => {
    const newSorting = this.state.sorting === "asc" ? "desc" : "asc";
    this.setState({
      sorting: newSorting,
    });
  };
  render() {
    const usersList = this.props.users.sort((a, b) =>
      this.state.sorting === "asc" ? a.age - b.age : b.age - a.age
    );
    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || "-"}
        </button>

        <ul className="users">
          {usersList.map((user) => (
            <User {...user} key={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}
