// src/pages/MyOrders.jsx
import React, { useEffect, useState } from "react";
import "../styles/MyOrders.css"; // Make sure this is correct relative path

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/orders");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error("Failed to fetch orders", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="my-orders-container">
      <h2 className="my-orders-title">📦 My Orders</h2>
      {orders.length === 0 ? (
        <p className="my-orders-empty">You haven't bought any books yet.</p>
      ) : (
        <ul className="my-orders-list">
          {orders.map((order) => (
            <li key={order._id} className="my-orders-item">
              <strong>{order.bookTitle}</strong> <br />
              <span>{new Date(order.date).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;
