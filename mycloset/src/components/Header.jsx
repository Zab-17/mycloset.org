import React, { useState } from "react";
import ShoppingCart from "./ShopingCart";
import SlideMenu from "./SlideMenu";

export default function Header({ cart }) {
  return (
    <div className="header-container">
      <SlideMenu />
      <header className="site-title">MYCLOSET</header>
      {/* Uncomment the following block if you want to include a cart button */}
      {/* <button className="button-header" onClick={toggleCart}>
        Cart
      </button> */}
      {/* {showCart && (
        <div className="cart-dropdown">
          <ShoppingCart cart={cart} />
        </div>
      )} */}
    </div>
  );
}
