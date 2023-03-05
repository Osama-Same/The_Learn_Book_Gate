import React, { useState } from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import {
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import PlayForWorkIcon from "@mui/icons-material/PlayForWork";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import InfoIcon from "@mui/icons-material/Info";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { BookDetails } from "./BookDetails";
import { Login } from "../admin/login";

export function LeftDisplay(props) {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState(null);
  const [openBookDetails, setOpenBookDetails] = useState(false);
  const token = localStorage.getItem("token");
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={10}
      >
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            تاريخ الناشر
          </button>

          <ul className="dropdown-menu">
            {props.books.map((e) => {
              return (
                <li>
                  <Link className="dropdown-item">{e.year_publication}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Button variant="outlined" color="success" endIcon={<PlagiarismIcon />}>
          تصدير الى الاكسل
        </Button>
        <Button variant="outlined" color="info" endIcon={<PlagiarismIcon />}>
          نسخ الرابط البحث
        </Button>
        <Typography variant="body1" sx={{ textAlign: "end" }}>
          <Typography variant="body1">1550 نتيجة</Typography>
          اختيار /ازالة الكل
          <Checkbox defaultChecked size="small" />
        </Typography>
      </Stack>
      <div className="row">
        {props.books.map((e) => {
          return (
            <Container maxWidth="md">
              <Card
                sx={{
                  mb: 3,
                  mt: 5,
                }}
              >
                <div className="col-14 pt-3 pb-3">
                  <div className="row">
                    <div className="col-2 pt-3 pb-3">
                      <Stack
                        direction="column"
                        spacing={1.5}
                        alignItems="center"
                      >
                        <Button
                          variant="contained"
                          color="success"
                          endIcon={<LibraryBooksIcon />}
                        >
                          {e.book_type}
                        </Button>
                        <Button
                          variant="text"
                          color="info"
                          endIcon={<InfoIcon />}
                          onClick={() => {
                            setOpenBookDetails(true);
                            setBook(e);
                            console.log(e);
                          }}
                        />
                        <Button
                          variant="text"
                          color="info"
                          endIcon={<LibraryAddIcon />}
                        />

                        {!token && (
                          <Button
                            variant="text"
                            color="info"
                            endIcon={<DownloadIcon />}
                            onClick={() => {
                              setOpen(true);
                              setBook(e);
                            }}
                          ></Button>
                        )}

                        {token && (
                          <Button
                            variant="contained"
                            color="info"
                            href={require(`../../../../public/${e.book_PDF}`)}
                            download
                          >
                            download
                          </Button>
                        )}

                        <Button
                          variant="text"
                          color="info"
                          endIcon={<PlayForWorkIcon />}
                        />
                      </Stack>
                    </div>
                    <div
                      className="col-7 pt-3 pb-3"
                      style={{ textAlign: "right", fontSize: "13px" }}
                    >
                      <p>{e.book_title}</p>
                      <div className="row">
                        <div className="col">
                          <p>
                            التاريخ الناشر :
                            <span style={{ color: "blue" }}>
                              {e.year_publication}
                            </span>
                          </p>
                        </div>
                        <div className="col">
                          <p>
                            تأليف:
                            <span style={{ color: "blue" }}>
                              {e.book_authors}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>
                            <span style={{ color: "blue" }}>{e.ISBN}</span> :
                            ISBN
                          </p>
                        </div>
                        <div className="col">
                          <p>
                            {" "}
                            الناشر :{" "}
                            <span style={{ color: "blue" }}>
                              {e.publisher_name}
                            </span>
                          </p>
                        </div>
                      </div>
                      <p>
                        {" "}
                        المواضيع الرئيسية :{" "}
                        <span style={{ color: "blue" }}>{e.book_Subjects}</span>
                      </p>

                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="flex-end"
                        alignItems="flex-end"
                      >
                        <Chip label="الوصف" />
                        <Chip label="الوصف" />
                        <Chip label="الوصف" />
                        <Chip label="الوصف" />
                        <Chip label="الوسوم :" variant="outlined" />
                      </Stack>
                    </div>
                    <div className="col-3">
                      <img
                        className="pt-3 pb-2"
                        src={e.book_cover}
                        alt="book_cover"
                        width={180}
                        height={200}
                      />
                      <Button
                        type="button"
                        variant="contained"
                        className="btn btn-primary btn-sm"
                        style={{ width: "180px" }}
                        href={"/book/" + e._id}
                      >
                        أقر الوثيقة
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Container>
          );
        })}
        <Typography variant="body1" sx={{ color: "blue", textAlign: "center" }}>
          عرض المزيد
        </Typography>
      </div>
      {open && <Login open={open} setOpen={setOpen} book={book} />}
      {openBookDetails && (
        <BookDetails
          openBookDetails={openBookDetails}
          setOpenBookDetails={setOpenBookDetails}
          book={book}
        />
      )}
    </div>
  );
}
