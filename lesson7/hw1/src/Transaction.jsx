import React from "react";
import moment from "moment";

const Transaction = ({ from, to, amount, rate, time }) => {
  const amountFormat = new Intl.NumberFormat("en-GB");
  return (
    <li className="transaction">
      <span className="transaction__date">{moment(time).format("DD MMM")}</span>
      <span className="transaction__time">{moment(time).format("HH:mm")}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{amountFormat.format(amount)}</span>
    </li>
  );
};

export default Transaction;
