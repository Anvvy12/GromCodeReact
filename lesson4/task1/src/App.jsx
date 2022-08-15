import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <Counter start={12} interval={1000} />
      <Counter start={500} interval={500} />
      <Counter start={-125} interval={800} />
    </>
  );
};

export default App;
