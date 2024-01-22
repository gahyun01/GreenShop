import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Find from './pages/Find';
import ProductRegistration from './pages/ProductRegistration';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/FindId' element={<FindId />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/myPage' element={<MyPage />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/Ai' element={<Ai />} />
        <Route path="/product-registration" element={<ProductRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}
