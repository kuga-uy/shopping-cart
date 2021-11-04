import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart( {originalItems} ) {
  
  const [items, setItems] = useState(originalItems);
  

  const updateQuantity = (id, newQuantity) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        item.quantity = newQuantity
        
      }
      
      return item;
    });
    
    setItems(newItems);
  };

  const grandTotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart">
        {originalItems.map((item) => (
          <CartItem key={item.id} updateQuantity={updateQuantity}  {...item} /> //pass destructuring obj as prop
          /* name={item.name} this is other form*/
          
        ))}
      </div>
      <h2>Grand Total:${grandTotal}</h2>
    </div>
  );
}

export default Cart;
