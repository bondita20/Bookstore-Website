import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
 
  return (
    <nav className="navbar">
      <div id="name"><b>📚 BOOKCOM</b></div>
      <ul>
        <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/">Home🏡</NavLink></li>
        <li id="cart"><NavLink className={(e)=>{return e.isActive?"red":""}} to="/addbook">AddBook📔</NavLink></li>
        <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/category">Category📃</NavLink></li>
        <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/login">Login🖊️</NavLink></li>
        <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/myorders">My Order📦</NavLink></li>
       
        
        
      </ul>
    </nav>
        
      
  )
}