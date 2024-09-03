import Product from "./Product";

export default function ShoppingCart({ cart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((product) => (
        <Product
          key={product.id}
          img={product.img}
          name={product.name}
          price={product.price}
          quantity={product.quantity} // Include quantity if needed
        />
      ))}
    </div>
  );
}
