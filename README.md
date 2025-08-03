# Bookstore-Website Project

## Frontend Setup

1. Open terminal in Bookstore-Website-master/frontends/folder.
2. Run: npm i and npm run dev
3.  > Note: node_modules for frontend is not included. Please run npm install to generate it.
    
# 📚 Bookstore Website

A full-stack web application where users can browse books by categories, register/login, add books, and place orders. 
Built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).

---

## Features

-  **Home Page**: A welcoming landing page with featured sections.
-  **Add Book Page**: Allows admin or users to add new books with relevant details.
-  **Category Page**: Displays books of different categories (e.g., Fiction, Non-fiction, Horror, etc.).
-  **Login & Register Pages**: User authentication using JWT.
-  **Buy Book**: Users can place an order by clicking on the "Buy" button (currently shows a confirmation and logs the order).
-  **My Orders Page**: Displays all orders made by the user.

---

## Tech Stack

**Frontend**:  
- React.js  
- React Router  
- Custom CSS

**Backend**:  
- Node.js  
- Express.js  
- MongoDB  
- Mongoose

**Other Tools**:
- JWT for authentication
- CORS and body-parser middleware


---

## Installation & Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Bookstore-Website.git
cd Bookstore-Website
```
### 2. Install backend dependencies
```bash
 cd backends
 npm install
```
### 3.  Install frontend dependencies
```bash
  cd frontends
  cd 01.frontend
  npm install
```
### 4. Start the development servers
```bash
   Start backend (on port 5000):
    npm start
```
### 5. Start frontend (on port 5173):
```bash
cd ../01.frontend
npm run dev
Make sure MongoDB is running locally

```


### 📁 **Project Structure**
```

Bookstore-Website/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   ├── main.jsx
├── README.md

```
### Author
 Bondita Nath















