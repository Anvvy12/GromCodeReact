import React from "react";
import Clock from "./Clock";

const App = () => {
  return (
    <>
      <Clock location="New York" offset={7} />
      <Clock location="London" offset={0} />
      <Clock location="Kyiv" offset={3} />
    </>
  );
};

export default App;
