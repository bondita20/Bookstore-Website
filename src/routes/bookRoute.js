const express = require("express");
const router = express.Router();
const { addBook, getBooks } = require("../controllers/bookController");
const { deleteBook } = require("../controllers/bookController");

// POST and GET routes
router.post("/books", addBook);
router.get("/books", getBooks);
router.delete("/books/:id", deleteBook); 

module.exports = router;