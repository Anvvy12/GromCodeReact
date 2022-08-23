import React from "react";

export default ({ numbers }) => {
  return (
    <ul>
      {numbers.map((num) => (
        <li>{num}</li>
      ))}
    </ul>
  );
};
