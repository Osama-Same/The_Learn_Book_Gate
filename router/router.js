const express = require("express");
const { upload } = require("../connection/upload");
const {
  getAllBooks,
  newBook,
  getBookDetails,
  searchBookTitle,
  searchBookSubjects,
  search,
} = require("../controller/book");
const {
  getBookSubject,
  newBookSubject,
} = require("../controller/book_Subject");
const { getAdmin, newAdmin, login } = require("../controller/admin");
const router = express.Router();

// Book

router.get("/book", getAllBooks);
router.post("/book", upload.single("book_PDF"), newBook);
router.get("/book/:_id", getBookDetails);
router.get("/search/Title", searchBookTitle);
router.get("/search/Subjects", searchBookSubjects);
router.get("/search/:Key", search);

// Admin

router.get("/admin", getAdmin);
router.post("/admin", newAdmin);
router.post("/login", login);

// book Subject

router.get("/book_Subject", getBookSubject);
router.post("/book_Subject", newBookSubject);


module.exports = router;
