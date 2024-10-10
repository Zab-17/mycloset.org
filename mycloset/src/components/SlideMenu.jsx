import React, { useState } from "react";
import Product from "./Product";
import clothes from "../clothes";
import accessories from "../accessories";

const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Track if the menu is open or closed
  const [showButton, SetShowButton] = useState(true);

  // Toggle slide menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle button click for navigation or any action you need
  const handleClick = (url) => {
    // Example content logic
    console.log(`Navigating to: ${url}`);

    // You can add product rendering logic here or handle navigation
    return accessories.map((object) => (
      <Product
        key={object.id}
        img={object.img}
        name={object.name}
        price={object.price}
      />
    ));
  };

  return (
    <div>
      {/* Conditionally render the toggle button based on menu state */}
      {!isOpen && (
        <button onClick={toggleMenu} className="menu-toggle">
          Open Menu
        </button>
      )}

      {/* Slide menu container */}
      <div className={`slide-menu ${isOpen ? "open" : ""}`}>
        {/* Close button inside the menu */}
        {isOpen && (
          <button onClick={toggleMenu} className="menu-toggle">
            Close Menu
          </button>
        )}

        {/* Menu items */}

        <div className="Products-menu">
          <button
            onClick={() => handleClick("/content1")}
            className="menu-item"
          >
            WOMEN'S CLOTHES
          </button>
          <button
            onClick={() => handleClick("/content2")}
            className="menu-item"
          >
            MEN'S CLOTHES
          </button>
          <button
            onClick={() => handleClick("/content3")}
            className="menu-item"
          >
            ACCESORIES
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideMenu;
