function Product({ img, name, quantity, price, click }) {
  return (
    <div className="product">
      <img src={img} alt={name} />
      <h5>{name}</h5>
      <h5>{quantity}</h5>
      <h6>{price}</h6>

      <button onClick={click}>Add to Cart</button>
    </div>
  );
}

export default Product;
