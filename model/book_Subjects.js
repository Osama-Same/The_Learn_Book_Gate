const mongoose = require("mongoose");

const book_Subject = new mongoose.Schema({
  book_Subjects: { type: String, required: false },
  book_Number: { type: Number, required: false },
});
module.exports = mongoose.model("Book_Subject", book_Subject);
