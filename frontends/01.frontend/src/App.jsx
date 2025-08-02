import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyOrders from "./pages/MyOrders";



export default function App() {
   
  return (
    <Router>
       
      <div className={"app-container"}>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/category" element={<Category />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/myorders" element={<MyOrders/>}/>
            </Routes>
           </main>
      </div>
    </Router>
  );
}