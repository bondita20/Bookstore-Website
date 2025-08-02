const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// POST /api/orders
router.post("/", async (req, res) => {
  try {
    const { bookId, bookTitle } = req.body;
    const newOrder = new Order({ bookId, bookTitle });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: "Failed to place order." });
  }
});

// GET /api/orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders." });
  }
});

module.exports = router;