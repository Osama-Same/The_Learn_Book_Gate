const express = require("express");
const { getAllBooks, newBook } = require("../controller/book");
const router = express.Router();

router.get("/book", getAllBooks);
router.post("/book", newBook);

module.exports = router;
