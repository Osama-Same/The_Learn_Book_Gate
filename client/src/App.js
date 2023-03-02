import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import PageSearch from "./components/PageSearch";
import { PageDisplay } from "./components/PageDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { _getAllBook } from "./service/Books";
const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    update();
  }, []);
  const update = async () => {
    let _books = await _getAllBook();
    setBooks(_books);
  };
  return (
    <BrowserRouter>
      <div>
        <PageSearch books={books} setBooks={setBooks}/>
      </div>
      <div>
        <PageDisplay books={books} setBooks={setBooks} />
      </div>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
