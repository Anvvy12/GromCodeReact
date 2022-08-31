import React from "react";

const CartTitle = ({ userfirstName, count }) => {
  return (
    <div className="cart-title">{`${userfirstName} you added ${count} items`}</div>
  );
};

export default CartTitle;
