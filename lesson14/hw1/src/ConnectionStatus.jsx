import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [isOnline, setStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", setStatus(true));
    window.addEventListener("offline", setStatus(false));

    return () => {
      window.addEventListener("online", setStatus(true));
      window.addEventListener("offline", setStatus(false));
    };
  }, []);

  return (
    <div className={`status ${isOnline ? "" : "status_offline"}`}>
      {isOnline ? "Online" : "Offline"}
    </div>
  );
};
export default ConnectionStatus;
