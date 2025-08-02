const Book = require("../models/Book");


exports.addBook = async (req, res) => {
  try {
    const { title, author, price, image,source } = req.body;
    const book = new Book({ title, author, price, image, source });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: "Failed to add book", error: err.message });
  }
};


exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch books", error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete book", error: err.message });
  }
};