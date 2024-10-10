import React, { useState } from "react";
import ShoppingCart from "./ShopingCart";
import SlideMenu from "./SlideMenu";

export default function Header({}) {
  return (
    <div className="header-container">
      <SlideMenu />
      <header className="site-title">MYCLOSET</header>

      {/* <button className="button-header" onClick={toggleCart}>
        Cart
      </button> */}
      {/* {showCart && (
        <div className="cart-dropdown">
          <ShoppingCart cart={cart} />
        </div> */}
      {/* )} */}
    </div>
  );
}
