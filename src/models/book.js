const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, default: "" },
  source: {
    type: String,
    enum: ['user', 'static'],
    default: 'user'
  }
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);