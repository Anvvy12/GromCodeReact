import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then((response) => response.json())
      .then(({ avatar_url, name, location }) => {
        this.setState({
          user: {
            avatar_url,
            name,
            location,
          },
        });
      });
  }
  render() {
    if (!this.state.user) {
      return null;
    }
    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={this.state.user.avatar_url}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{this.state.user.name}</span>

          <span className="user__location">{this.state.user.location}</span>
        </div>
      </div>
    );
  }
}

export default User;
