import React, { Component } from "react";

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
    };
  }
  onlineStatus = () => {
    this.setState({
      isOnline: true,
    });
  };

  componentDidMount() {
    window.removeEventListener("online", this.onlineStatus);
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
