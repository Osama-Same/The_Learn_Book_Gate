import React from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { FormSearch } from "./FormSearch";

const PageSearch = (props) => {
  return (
    <div>
      <Header />
      <Navbar />
      <FormSearch books={props.books} setBooks={props.setBooks}/>
    </div>
  );
};

export default PageSearch;
