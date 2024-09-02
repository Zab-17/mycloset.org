function Product(props) {
  return (
    <div className="product">
      <img src={props.img} alt={props.name} />
      <h5>{props.name}</h5>
      <h6>{props.price}</h6>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
