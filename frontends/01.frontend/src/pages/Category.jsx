import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import "../styles/Category.css";

const staticBooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 299,
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
  },
  {
    title: "1984",
    author: "George Orwell",
    price: 456,
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
  },
  {
    title: "Harry Potter",
    author: "J.K Rowling",
    price: 599,
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg"
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: 699,
    image: "https://covers.openlibrary.org/b/olid/OL25434203M-L.jpg"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 599,
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 299,
    image: "https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    price: 499,
    image: "https://m.media-amazon.com/images/I/81WojUxbbFL.jpg"
  },
  {
    title: "The Family Book",
    author: "Todd Parr",
    price: 599,
    image: "https://m.media-amazon.com/images/I/91zbi9M+mKL.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    price: 499,
    image: "https://m.media-amazon.com/images/I/81A-mvlo+QL.jpg"
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    price: 449,
    image: "https://img1.od-cdn.com/ImageType-100/0111-1/{4307CBA2-3A13-40EE-A2C0-35851FB19747}Img100.jpg"
  }
];

const Category = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadAndUploadBooks = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/books');
        const existingBooks = await res.json();
      

        // Upload static books with source: 'static'
        for (let book of staticBooks) {
          const alreadyExists = existingBooks.some(
            (b) =>
              b.title === book.title &&
              b.author === book.author &&
              b.price === book.price
          );

          if (!alreadyExists) {
            await fetch("http://localhost:5000/api/books", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...book, source: "static" }),
            });
          }
        }

        // Fetch updated books
        const updated = await fetch('http://localhost:5000/api/books');
        const updatedBooks = await updated.json();
           console.log("Fetched books:", updatedBooks);  
        setBooks(updatedBooks);
      } catch (err) {
        console.error("Error loading books:", err);
      }
    };

    loadAndUploadBooks();
  }, []);

  const handleBuy = async (book) => {
    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookId: book._id,
          bookTitle: book.title,
        }),
      });

      if (res.ok) {
        alert(`✅ Purchased "${book.title}"!`);
         navigate("/myorders");
      } else {
        alert("❌ Purchase failed.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/books/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("✅ Book deleted successfully.");
        setBooks(books.filter(book => book._id !== id));
      } else {
        alert("❌ Failed to delete book.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("❌ Error occurred while deleting.");
    }
  };

  return (
    <div className="category-container">
      <div className="book-list">
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <img src={book.image} alt={book.title} className="book-image" />
            <h3>{book.title}</h3>
            <p>By {book.author}</p>
            <p><strong>₹{book.price}</strong></p>
            <button className="book-button" onClick={() => handleBuy(book)}>Buy Now</button>
            {book.source === "user" && (
              <button className="delete-button" onClick={() => handleDelete(book._id)}>Delete</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;