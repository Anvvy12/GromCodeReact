import React, { Component } from "react";

class ConnectionStatus extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isOnline: null,
  //     };
  //   }
  //   updateStatus = (event) => {
  //     console.log(Navigator.onLine);
  //   };

  //   componentDidMount() {
  //     window.addEventListener("online", this.updateStatus);
  //   }

  render() {
    return window.navigator.onLine ? (
      <div className="status">online</div>
    ) : (
      <div className="status status_offline">offline</div>
    );
  }
}

export default ConnectionStatus;
