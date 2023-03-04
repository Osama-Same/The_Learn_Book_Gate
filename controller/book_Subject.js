const Book_Subject = require("../model/book_Subjects");

const getBookSubject = (req,res) => {
  Book_Subject.find((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const newBookSubject = (req,res) => {
  let book_Subject = new Book_Subject({
    book_Subjects: req.body.book_Subjects
  });
  book_Subject
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  getBookSubject,
  newBookSubject,
};
