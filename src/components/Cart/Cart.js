import React from "react";
import Title from "../Customised Components/Title";

import CartColumns from "./components/CartColumns";
import EmptyCart from "./components/EmptyCart";
import CartList from "./components/CartList";
import CartTotals from "./components/CartTotals";
const Cart = (props) => {
  return (
    <section className="py-5">
      {props.cart.length > 0 ? (
        <div className="container-fluid">
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList {...props} />
          <CartTotals {...props} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default Cart;
