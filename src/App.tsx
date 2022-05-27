import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import Cart from './components/cart/Cart';
import useCart from './hook/useCart';
import { useEffect } from 'react';



const App: React.FC = () => {
  const [ cart, total, open, handleAddToCart, cartTotal, handleIncrement, handleDecrement, openCart, closeCart, quantity, cartQuantity ] = useCart();

  useEffect(() => { cartTotal(); }, [cart])
  
  useEffect(() => { cartQuantity(); }, [cart])

  return (
    <AppWrapper>
      <Cart open={open} closeCart={closeCart} total={total} cart={cart} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
      <Header openCart={openCart} quantity={quantity}/>
      <Routes>
        <Route path='clothing-store-app/' element={<Home />}/>
        <Route path='clothing-store-app/shop' element={<Shop handleAddToCart={handleAddToCart}/>}/>
        <Route path='clothing-store-app/contact' element={<Contact />}/>
      </Routes>
      <Footer/>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  position: relative;
  height: 100%;
`



export default App;
