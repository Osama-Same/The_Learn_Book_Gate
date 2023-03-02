const Book_Subject = require("../model/book_Subjects");

const getBookSubject = () => {
  Book_Subject.find((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

module.exports = {
  getBookSubject,
};
