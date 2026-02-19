import { useState } from 'react'
import './App.css'
import Ecom from './Ecom'

export default function App() {
  const [cart, setCart] = useState([])
  const product = [{
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08192495_49.png"
  }, {
    id: 2,
    name: "Mobile",
    price: 20000,
    image: "https://www.sathya.store/img/product/FAb9jtNpEjJeGtMP.png"
  }, {
    id: 3,
    name: "Headphones",
    price: 2000,
    image: "https://www.leafstudios.in/cdn/shop/files/1_a43c5e0b-3a47-497d-acec-b4764259b10e_1024x1024.png?v=1750486829"
  }]
  function addToCart(product) {
    setCart([...cart, product])
  }
  function removeFromCart(index) {
    const updateCart = cart.filter((_, i) => i != index)
    setCart(updateCart)
  }
  return(
    <>
      <Ecom products={product} addToCart={addToCart} />
    </>
  )
}
