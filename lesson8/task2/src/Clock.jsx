import React, { Component } from "react";
import moment, { utc } from "moment";

class Clocl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
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

export default Clocl;

// time: getTimeWithOffset(props.offset).toLocaleTimeString(),
