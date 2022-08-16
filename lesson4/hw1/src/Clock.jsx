import React, { Component } from "react";
import moment from "moment";
import "./clock.scss";

// const formatDate = (getTimeWithOffset) => moment(date).format("h:mm:ss");

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location,
      time: getTimeWithOffset(props.offset).toLocaleTimeString(),
    };

    setInterval(() => {
      this.setState({
        time,
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <div className="clock">
          <div className="clock__location">{this.state.location}</div>
          <div className="clock__time">{this.state.time}</div>
        </div>
      </>
    );
  }
}
