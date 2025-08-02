import { useState } from "react";
import "../styles/AddBook.css";
import "../pages/Category.jsx";

export default function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    image: ""
  });

  const [addedBooks, setAddedBooks] = useState([]); 

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    });

    if (response.ok) {
      alert("✅ Book added successfully!");
      setAddedBooks([book, ...addedBooks]);
      setBook({ title: "", author: "", price: "", image: "" });
    } else {
      alert("❌ Failed to add book.");
    }
  };
 

  return (
    <div className="add-book-page">
      <div className="welcome-section">
        <h1>📚 Book Editor Dashboard</h1>
        <p><b>Welcome! Use the form below to add new books to your store. Track recently added ones and get tips.</b></p>
      </div>

      <div className="main-layout">
        
        <div className="form-box">
          <h2 className="form-title">➕ Add a New Book</h2>
          <form onSubmit={handleSubmit} className="book-form">
            <input type="text" name="title" placeholder="Book Title" value={book.title} onChange={handleChange} required />
            <input type="text" name="author" placeholder="Author Name" value={book.author} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price (₹)" value={book.price} onChange={handleChange} required />
            <input type="text" name="image" placeholder="Cover Image URL" value={book.image} onChange={handleChange} />

            {book.image && (
              <div className="preview">
                <p>📖 Preview:</p>
                <img src={book.image} alt="Book Cover" />
              </div>
            )}

            <button type="submit">Add Book</button>
          </form>
        </div>

        
        <div className="tips-box">
          <h3>💡 Tips</h3>
          <ul>
            <li>Use high-quality image URLs.</li>
            <li>Price must be in ₹ Rupees.</li>
            <li>Keep the title under 50 characters.</li>
            <li>Double-check spelling before submitting.</li>
          </ul>
        </div>
      </div>

      
      {addedBooks.length > 0 && (
        <div className="recent-books">
          <h2>🕘 Recently Added Books</h2>
          <div className="book-list">
            {addedBooks.map((book, index) => (
              <div className="book-card" key={index}>
                <img src={book.image || "https://via.placeholder.com/100x150?text=No+Image"} alt={book.title} />
                <div>
                  <h4>{book.title}</h4>
                  <p>by {book.author}</p>
                  <p>₹{book.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


