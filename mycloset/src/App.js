import "./App.css";
import Product from "./components/Product"; // Update the import
import Header from "./components/Header";
import clothes from "./clothes"; // Import the clothes array
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      {clothes.map((object) => (
        <Product
          key={object.id}
          img={object.img}
          name={object.name}
          price={object.price}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
