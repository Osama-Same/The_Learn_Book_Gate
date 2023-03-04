import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export function FormSearch(props) {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      props.setBooks([...props.books]);
      return;
    }
    props.setBooks(
      props.books.filter((value) => {
        return value.book_title.indexOf(search) !== -1;
      })
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: "100px" }}>
      <div className="row">
        <div className="col-2">
          <button type="button" className="btn btn-primary btn-sm">
            بحث المتقدم
          </button>
        </div>
        <div className="col-10">
          <div className="input-group ">
            <input
              type="search"
              placeholder="Search"
              className="form-control form-control-sm"
              aria-label="Text input with 2 dropdown buttons"
              value={search}
              onChange={handleSearchChange}
            />
            <button
              className="btn btn-outline-secondary dropdown-toggle btn-sm"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              تصفح المكتبة الرقمية
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item">Action</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
