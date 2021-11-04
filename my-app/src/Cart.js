import React from "react";
import CartItem from "./CartItem";

function Cart({ items }) {
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div classname="cart">
        {items.map((item) => (
          <CartItem cartItem {...item} /> //pass destructuring obj as prop
          /* name={item.name} this is other form*/
        ))}
      </div>
    </div>
  );
}

export default Cart;
