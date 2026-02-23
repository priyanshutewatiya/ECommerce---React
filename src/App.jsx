import { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import "./App.css";

export default function App()
{

// ✅ Search State
const [search,setSearch] = useState("");

// ✅ Cart State
const [cart,setCart] = useState([]);

const [totalAmt,setAmt] = useState(0);


// ✅ Products
const products=[

{
id:1,
name:"Laptop",
price:56000,
image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/ac16250/media-gallery/laptop-alienware-ac16250-gallery-1.psd?fmt=png-alpha"
},

{
id:2,
name:"Mobile",
price:30000,
image:"https://darlingretail.com/cdn/shop/files/iPhone_15_Blue_Pure_Back_iPhone_15_Blue_Pure_Front_2up_Screen__WWEN_600x.jpg"
},

{
id:3,
name:"Charger",
price:1000,
image:"https://m.media-amazon.com/images/I/51VM2jCx6kL._SX679_.jpg"
}

];


// ✅ Filter Logic
const filteredProducts = products.filter(product =>

product.name.toLowerCase().includes(search.toLowerCase())

);



// ✅ Add to Cart
function addToCart(product)
{

setCart([...cart,product]);

setAmt(totalAmt+product.price);

}


// ✅ Remove from Cart
function removeFromCart(index)
{

const updatedCart = cart.filter((_,i)=>i!==index);

setCart(updatedCart);

}



return(

<div className='container'>


<Header

cartCount={cart.length}

search={search}

setSearch={setSearch}

/>


{/* ✅ Pass Filtered Products */}

<ProductList

products={filteredProducts}

addToCart={addToCart}

/>



<Cart

totalAmt={totalAmt}

cart={cart}

removeFromCart={removeFromCart}

/>


</div>

);

}