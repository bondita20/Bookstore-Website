// import React, { useEffect, useState } from "react";

// const staticBooks = [
//   {
//     title: "Atomic Habits",
//     author: "James Clear",
//     price: 499,
//     image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg"
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 299,
//     image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     price: 456,
//     image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
//   },
//   {
//     title: "Harry Potter",
//     author: "J.K Rowling",
//     price: 599,
//     image: "https://covers.openlibrary.org/b/id/7984916-L.jpg"
//   },
//   {
//     title: "Gone Girl",
//     author: "Gillian Flynn",
//     price: 699,
//     image: "https://covers.openlibrary.org/b/olid/OL25434203M-L.jpg"
//   },
//   {
//     title: "Sapiens: A Brief History of Humankind",
//     author: "Yuval Noah Harari",
//     price: 599,
//     image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg"
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     price: 299,
//     image: "https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg"
//   },
//   {
//     title: "Educated",
//     author: "Tara Westover",
//     price: 499,
//     image: "https://m.media-amazon.com/images/I/81WojUxbbFL.jpg"
//   },
//   {
//     title: "Guns, Germs, and Steel",
//     author: "Jared Diamond",
//     price: 599,
//     image: "https://m.media-amazon.com/images/I/91zbi9M+mKL.jpg"
//   },
//   {
//     title: "The Silk Roads: A New History of the World",
//     author: "Peter Frankopan",
//     price: 499,
//     image: "https://m.media-amazon.com/images/I/81A-mvlo+QL.jpg"
//   },
//   {
//     title: "The Girl with the Dragon Tattoo",
//     author: "Stieg Larsson",
//     price: 449,
//     image: "https://img1.od-cdn.com/ImageType-100/0111-1/{4307CBA2-3A13-40EE-A2C0-35851FB19747}Img100.jpg"
//   }
// ];

// const AddStaticBooks = () => {
//   const [status, setStatus] = useState("⏳ Adding books...");

//   useEffect(() => {
//     const addBooks = async () => {
//       try {
//         for (let book of staticBooks) {
//           const res = await fetch("http://localhost:5000/api/books", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(book),
//           });

//           const result = await res.json();
//           console.log(`✅ Added: ${book.title}`, result);
//         }
//         setStatus("✅ All static books added to the backend!");
//       } catch (error) {
//         console.error("❌ Error adding books:", error);
//         setStatus("❌ Failed to add some or all books.");
//       }
//     };

//     addBooks();
//   }, []);

//   return (
//     <div style={{ padding: "2rem", fontFamily: "Arial", fontSize: "18px" }}>
//       <h2>Add Static Books to Backend</h2>
//       <p>{status}</p>
//     </div>
//   );
// };

// export default AddStaticBooks;