export default function ProductCart({product , addToCart}) {
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={()=> addToCart}>Add to Cart</button>
        </div>
    )
}