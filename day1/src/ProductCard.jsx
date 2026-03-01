function ProductCard(props) {

  function handleClick() {
    console.log("Added " + props.name + " to cart")
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.price}</p>

      <button onClick={handleClick}>
        Add to Cart
      </button>

    </div>
  )
}

export default ProductCard