import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar/Navbar";
import { Error } from "./components/Error/Error";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Router>
      <ToastContainer position="top-center"/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<Error/>} />
        <Route />
      </Routes>
    </Router>
  )
}
