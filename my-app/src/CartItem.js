import React from "react";

export default function CartItem({ id, name, price, quantity }) {
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <div className="item">{name}</div> <div className="item">${price}</div>
        <div className="item">{quantity}</div>
        <div>Total: ${quantity * price}</div>
        <div className="btnContainer">
          <button className="addItem">+1</button>
          <button className="restItem">-1</button>
        </div>
      </div>
    </div>
  );
}
