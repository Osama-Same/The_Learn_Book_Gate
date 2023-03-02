const express = require("express");
const { upload } = require("../connection/upload");
const { getAllBooks, newBook , getBookDetails ,search} = require("../controller/book");
const router = express.Router();

router.get("/book", getAllBooks);
router.post("/book", upload.single("book_PDF"), newBook);
router.get("/book/:_id", getBookDetails);
router.get("/book/:_id", getBookDetails);
router.get("/search", search);

module.exports = router;
