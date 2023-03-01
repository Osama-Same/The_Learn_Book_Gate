import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
const Search = () => {
  return (
    <div>
      <div>
        {/* Header */}
        <header
          style={{
            minHeight: "30vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white",
            backgroundImage:
              " url('https://lh3.googleusercontent.com/0x7FTCCxabauk4GkUeYvCodeIcA8DTjdxaq9BYBWvA36tU0g5ASjVh8z74r27BlRrL2uniYM7w-gEUl37iAFLr8xZxgFo_j8AUrIgXc')",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h5"
              sx={{ textAlign: "end", fontSize: "30px" }}
              pt={18}
              pr={3}
            >
              نتائج البحث{" "}
              <span style={{ color: "blue", fontSize: "30px" }}>|</span>
            </Typography>
          </Container>
        </header>
      </div>


      {/* Navbar */}

      
      <div style={{ background: "silver", fontFamily: "sans-serif" }}>
        <Container maxWidth="lg">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link">نتائج البحث</Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black", paddingLeft: "10px" }}
              >
                / الرئيسية <HomeIcon />
              </Link>
            </li>
          </ul>
        </Container>
      </div>



      {/* Search */}

      <Container maxWidth="md" sx={{ mt: "100px" }}>
        <div className="row">
          <div className="col-2">
            <button type="button" className="btn btn-primary btn-sm">
              بحث المتقدم
            </button>
          </div>
          <div className="col">
            <div className="input-group ">
              <input
                type="text"
                className="form-control form-control-sm"
                aria-label="Text input with 2 dropdown buttons"
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
                <li>
                  <Link className="dropdown-item">Action</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Search;
