import React, { Component } from "react";

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
    };
  }
  onlineStatus = (event) => {
    this.setState({
      isOnline: event.type,
    });
  };

  componentDidMount() {
    window.addEventListener("online", this.onlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.onlineStatus);
  }

  render() {
    return this.state.isOnline ? (
      <div className="status">online</div>
    ) : (
      <div className="status status_offline">offline</div>
    );
  }
}

export default ConnectionStatus;
