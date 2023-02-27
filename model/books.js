const mongoose = require("mongoose");

const books = new mongoose.Schema({
  book_title: { type: String, required: true },
  book_authors: { type: String, required: true },
  book_Subjects: { type: String, required: true },
  year_publication: { type: Date, required: true },
  publisher_name: { type: String, required: true },
  book_cover: { type: Image, required: true },
  book_cover: { type: Image, required: true },
  book_PDF: { type: File, required: true },
  ISBN: { type: Number, required: true },
});
module.exports = mongoose.model("book", books);
