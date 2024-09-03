import React, { useState } from "react";
import ShoppingCart from "./ShopingCart";

export default function Header({ cart }) {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="header-container">
      <header>MYCLOSET</header>
      <button className="button-header">Profile</button>
      <button className="button-header" onClick={toggleCart}>
        Cart
      </button>
      {showCart && (
        <div className="cart-dropdown">
          <ShoppingCart cart={cart} />
        </div>
      )}
    </div>
  );
}
