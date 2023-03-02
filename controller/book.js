const Books = require("../model/books");
const cloudinary = require("../connection/cloudinary");
const getAllBooks = (req, res) => {
  Books.find((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const newBook = async (req, res) => {
  let result = null;
  if (req.file) {
    result = await cloudinary.uploader.upload(req.file.path, {
      folder: "Book",
    });

  }
  let obj = new Books({
    new_book: [],
    book_title: req.body.book_title,
    book_authors: req.body.book_authors,
    book_Subjects: req.body.book_Subjects,
    year_publication: req.body.year_publication,
    publisher_name: req.body.publisher_name,
    book_cover: req.body.book_cover,
    book_PDF: result?.secure_url,
    ISBN: req.body.ISBN,
    book_type: req.body.book_type,
  });

  obj
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getBookDetails = (req, res) => {
  const id = req.param._id;

  Books.findOne(id).then((result) => {
    res.json(result);
  });
};
const search = (req, res) => {
  const book_title = req.body.book_title;
  const book_Subjects = req.body.book_Subjects;

  Books.find({book_title}).then((result) => {
    res.json(result);
  });
};

module.exports = {
  getAllBooks,
  newBook,
  getBookDetails,
  search,
};
