import React from "react";

export default function CartItem({id, name, price, quantity, updateQuantity}) {
  const addOne = () => {
    updateQuantity(id, quantity + 1);
  };

  const restOne = () => {
    updateQuantity(id, quantity - 1);
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <div className="item">{name}</div> <div className="item">${price}</div>
        <div className="item">
          <button onClick={restOne} disabled={quantity <= 0}className="restItem">-</button>
          {quantity}
          <button onClick={addOne} className="addItem">
            +
          </button>
        </div>
        <div>Total: ${quantity * price}</div>
        <div className="btnContainer"></div>
      </div>
    </div>
  );
}
