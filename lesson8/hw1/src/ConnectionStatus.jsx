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
  offlineStatus = () => {
    this.setState({
      isOnline: false,
    });
  };

  componentDidMount() {
    window.removeEventListener("online", this.onlineStatus);
    window.removeEventListener("offline", this.offlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.onlineStatus);
    window.removeEventListener("offline", this.offlineStatus);
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
