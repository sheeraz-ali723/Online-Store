import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import ProductDetail from './Pages/ProductDetail'
import {Route, Routes } from 'react-router-dom'
import ShopNow from './Pages/ShopNow'
import Product from './Pages/Product'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Components/Cart'
import Checkout from './Pages/CheckOut'
const App = () => {
  return (
    <>

<Navbar/>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/explore' element={<Explore/>}/>
<Route path="/product/:id" element={<ProductDetail />} />
<Route path='/Product' element={<Product/>}/>
<Route path='/shop' element={<ShopNow/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path="/checkout" element={<Checkout />} />


</Routes>
<Footer/>






    </>
  )
}

export default App