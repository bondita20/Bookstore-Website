const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const bookRoutes = require("./routes/bookRoute");
const loginRoutes=require("./routes/login");
const registerRoutes=require("./routes/register");
const orderRoutes=require("./routes/orderRoutes");

dotenv.config();


mongoose
   .connect(process.env.MONGODB_URI ||"mongodb://localhost:27017/bookstore")
   .then(()=>console.log("MongoDB connected successfully"))
   .catch((err)=>console.error("MongoDB connection error:",err));

   
   const app=express();
  
   app.use(cors());

   const PORT = process.env.PORT || 5000;
   app.use(express.json());

   app.use("/api", bookRoutes);
   app.use("/api",loginRoutes);
   app.use("/api",registerRoutes);
   app.use("/api/orders",orderRoutes);
   

   app.listen(PORT,()=>{
    console.log(`Server running on the port ${PORT}`);
   });

   module.exports=app;