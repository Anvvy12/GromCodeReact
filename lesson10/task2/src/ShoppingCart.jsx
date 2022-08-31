import React, { Component } from "react";
import CartTitle from "./CartTitle";
import ProductsList from "./ProductsList";

class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        id: "1",
        name: "Mac",
        price: 899,
      },
      {
        id: "2",
        name: "Xaomi",
        price: 299,
      },
      {
        id: "3",
        name: "Арбуз",
        price: 99.99,
      },
    ],
  };
  render() {
    return (
      <div className="column">
        <CartTitle
          userName={this.props.userDate.firstName}
          count={this.state.cartItems.length}
        />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
