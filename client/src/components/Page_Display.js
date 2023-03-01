import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { _getAllBook } from "../service/Books";
const Page_Display = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    update();
  });

  const update = async () => {
    const _books = await _getAllBook();
    setBooks(_books);
    console.log(books);
  };
  return (
    <div>
      <Container maxWidth="lg" sx={{ mb: 5, mt: 10 }}>
        <div className="row">
          <div className="col">
            <div className="row">
              {books.map((e) => {
                return <div className="col-md-8">{e.book_title}</div>;
              })}
            </div>
          </div>
          <div className="col-md-4">osama</div>
        </div>
      </Container>
    </div>
  );
};

export default Page_Display;
