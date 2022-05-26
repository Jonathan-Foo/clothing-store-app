import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import Cart from './components/cart/Cart';


const App: React.FC = () => {
  return (
    <AppWrapper>
      <Cart/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/contact' element={<Contact />}/>
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
