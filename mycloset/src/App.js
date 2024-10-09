import "./App.css";
import Product from "./components/Product";
import Header from "./components/Header";

import clothes from "./clothes";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  // const [cart, setCart] = useState([]); // Initialize cart as an empty array

  // function addToCart(product) {
  //   setCart((prevCart) => {
  //     return [...prevCart, product];
  //   });
  // }

  return (
    <div className="App">
      <Header />
      {clothes.map((object) => (
        <Product
          key={object.id}
          img={object.img}
          name={object.name}
          price={object.price}
          // click={() => addToCart(object)} // Pass the function with the current product
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
