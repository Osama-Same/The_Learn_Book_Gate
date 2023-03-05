const Books = require("../model/books");
const fs = require("fs");
const { ObjectId } = require("mongodb");
const path = require("path");
const pdfparse = require("pdf-parse");

const getAllBooks = (req, res) => {
  Books.find().then((result) => {
    res.json(result);
  });
};

const newBook = async (req, res) => {
  const pdffile = fs.readFileSync(
    path.resolve(__dirname, `../public/${req.file?.originalname}`)
  );
  pdfparse(pdffile).then((data) => {
    console.log(data.numpages);
    const book = new Books({
      book_title: req.body.book_title,
      book_authors: req.body.book_authors,
      book_Subjects: req.body.book_Subjects,
      year_publication: req.body.year_publication,
      publisher_name: req.body.publisher_name,
      book_cover: req.body.book_cover,
      ISBN: req.body.ISBN,
      book_type: req.body.book_type,
      book_PDF: req.file.filename,
    });

    book.save().then((cho) => {
      console.log(cho);
      res.status(201).json({
        message: "Book uploaded successfully",
        uploadedBook: {
          book_PDF: cho.book_PDF,
          _id: cho._id,
        },
      });
    });
  });
};

const getBookDetails = (req, res) => {
  let id = req.params._id;
  let o_id = new ObjectId(id);
  Books.findOne({ _id: o_id }).then((result) => {
    res.json(result);
  });
};

const searchBookTitle = async (req, res) => {
  let book_title = req.body.book_title;
  Books.find({ book_title }).then((result) => {
    res.json(result);
  });
};

const searchBookSubjects = async (req, res) => {
  let book_Subjects = req.body.book_Subjects;
  Books.find({ book_Subjects }).then((result) => {
    res.json(result);
  });
};
const search = async (req, res) => {
  let data = await Books.find({
    $or: [
      { book_title: { $regex: req.params.Key } },
      { book_Subjects: { $regex: req.params.Key } },
    ],
  });
  res.send(data);
};

module.exports = {
  getAllBooks,
  newBook,
  getBookDetails,
  searchBookTitle,
  searchBookSubjects,
  search,
};
