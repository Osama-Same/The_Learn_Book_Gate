import React, { useEffect, useState } from "react";
import { LeftDisplay } from "./PageDisplay/LeftDisplay";
import { RightDisplay } from "./PageDisplay/RightDisplay";
import { _getAllBook } from "../service/book";
import { _getBookSubject } from "../service/bookSubject";
import { Container } from "@mui/material";
import { FormSearch } from "./PageSearch/FormSearch";
const PageDisplay = () => {
  const [books, setBooks] = useState([]);
  const [booksSubject, setbooksSubject] = useState([]);
  useEffect(() => {
    update();
  });
  const update = async () => {
    let _books = await _getAllBook();
    let _booksSubject = await _getBookSubject();

    setBooks(_books);
    setbooksSubject(_booksSubject);
  };


  return (
    <div>
      <FormSearch />
      <div className="display">
        <Container maxWidth="lg" sx={{ mb: 10, mt: 10 }}>
          <div className="row pt-3 pb-3">
            <div className="col-md-9 pt-3 pb-3">
              <LeftDisplay books={books} setBooks={setBooks} />
            </div>
            <div className="col-md-3 pt-3 pb-3">
              <RightDisplay
                books={books}
                setBooks={setBooks}
                booksSubject={booksSubject}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PageDisplay;
