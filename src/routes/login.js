const express=require("express");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const User = require("../models/User");
const authenticateToken = require("../middleware/authMiddleware.js");


const router=express.Router();

router.post("/login", async(req,res)=>{
    const {email,password} = req.body;

    try{
        const user=await User.findOne({email})
        if(!user) return res.status(400).json({message:"Invalid credentials"});

        const isMatch=await bcrypt.compare(password,user.password)
         if(!isMatch) return res.status(400).json({message:"Invalid credentials"});

          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "7d",
    });
         res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/dashboard", authenticateToken, (req, res) => {
  res.json({ message: `Welcome user ${req.user.id}` });
});
module.exports = router;



    
