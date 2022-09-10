import React, { useState, useEffect } from "react";
import moment from "moment";

const Clock = ({ offset, location }) => {
  const [time, setOffset] = useState();

  useEffect(() => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    const actualTime = new Date(
      currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    );
    setOffset(moment(actualTime).format("h:mm:ss A"));
  }, [time]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;
