const mongoose = require("mongoose");

const books = new mongoose.Schema({
  new_book: { type: Array },
  book_title: { type: String, required: true },
  book_authors: { type: String, required: false },
  book_Subjects: { type: String, required: false },
  year_publication: { type: Date, required: false },
  publisher_name: { type: String, required: false },
  book_cover: { type: String, required: false },
  book_PDF: { type: String, required: false },
  ISBN: { type: Number, required: false },
  book_type: { type: String, required: false },
});
module.exports = mongoose.model("Books", books);
