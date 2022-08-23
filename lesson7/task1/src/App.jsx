import React from "react";
import NumbersList from "./NumbersList";

export default () => {
  const numbersArray = [1, 2, 3, 4, 5];
  return <NumbersList numbers={numbersArray} />;
};
