import React, { Component } from "react";
import moment from "moment";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: this.componentDidMount(),
    };
  }

  componentDidMount() {
    const getTimeWithOffset = (offset) => {
      const currentTime = new Date();
      const utcOffset = currentTime.getTimezoneOffset() / 60;
      return new Date(
        currentTime.setHours(currentTime.getHours() + offset + utcOffset)
      );
    };

    this.interval = setInterval(() => {
      this.setState({ date: getTimeWithOffset(this.props.offset) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">
          {moment(this.state.date).format("h:mm:ss A")}
        </div>
      </div>
    );
  }
}

export default Clock;

// time: getTimeWithOffset(props.offset).toLocaleTimeString(),
