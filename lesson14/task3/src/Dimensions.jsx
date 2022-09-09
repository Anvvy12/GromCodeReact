import React, { useEffect, useState } from "react";

const Dimensions = () => {
  const [demensions, setDemensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDemensions({ width: innerWidth, height: innerHeight });

    const handlerResize = (event) => {
      const { innerWidth, innerHeight } = event.target;
      setDemensions({ width: innerWidth, height: innerHeight });
    };

    window.addEventListener("resize", handlerResize);
    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, []);

  const { width, height } = demensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
