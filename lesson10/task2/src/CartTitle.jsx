import React from "react";

const CartTitle = ({ userfirstName, userLastName, count }) => {
  return (
    <div className="cart-title">{`Hello, ${userfirstName}, ${userLastName} you added ${count} items`}</div>
  );
};

export default CartTitle;
