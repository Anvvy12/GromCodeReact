import React, { Component } from "react";
import moment from "moment";
import "./clock.scss";

// const formatDate = (getTimeWithOffset) => moment(date).format("h:mm:ss");

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return moment(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  ).format("h:mm:ss A");
};

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location,
      offset: props.offset,
    };

    setInterval(() => {
      this.setState({
        corentTime: getTimeWithOffset(this.state.offset),
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <div className="clock">
          <div className="clock__location">{this.props.location}</div>
          <div className="clock__time">{this.state.corentTime}</div>
        </div>
      </>
    );
  }
}
