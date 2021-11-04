import React from "react";
import Cart from "./Cart.js";
import "./App.css";
import "./Cart.css";

const originalItems = [
  { id: 1, name: "Marvel shirt", price: "1200", quantity: 1 },
  { id: 2, name: "Converse Shoes", price: "3000", quantity: 1 },
  { id: 3, name: "Short", price: "1500", quantity: 1 },
];

function App() {
  return (
    <>
      <Cart originalItems={originalItems} />
    </>
  );
}

export default App;
