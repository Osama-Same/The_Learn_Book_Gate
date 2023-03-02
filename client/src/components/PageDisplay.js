import React from "react";
import {
  Button,
  Card,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import InfoIcon from "@mui/icons-material/Info";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import DownloadIcon from "@mui/icons-material/Download";
import PlayForWorkIcon from "@mui/icons-material/PlayForWork";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import { Link } from "react-router-dom";
import { FilterResults } from "./FilterResults";

export function PageDisplay(props) {
  return (
    <div>
      <div className="display_book">
        <Container maxWidth="lg" sx={{ mb: 10, mt: 10 }}>
          <div className="row pt-3 pb-3">
            <div className="col pt-3 pb-3">
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
                          <Link className="dropdown-item">
                            {e.year_publication}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <Button
                  variant="outlined"
                  color="success"
                  endIcon={<PlagiarismIcon />}
                >
                  تصدير الى الاكسل
                </Button>
                <Button
                  variant="outlined"
                  color="info"
                  endIcon={<PlagiarismIcon />}
                >
                  نسخ الرابط البحث
                </Button>
                <Typography variant="body1">1550 نتيجة</Typography>
              </Stack>

              {/* Display book */}

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
                                  الرسالة
                                </Button>
                                <Button
                                  variant="text"
                                  color="info"
                                  endIcon={<InfoIcon />}
                                />
                                <Button
                                  variant="text"
                                  color="info"
                                  endIcon={<LibraryAddIcon />}
                                />
                                <Button
                                  variant="text"
                                  color="info"
                                  endIcon={<DownloadIcon />}
                                />
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
                                  <p> التاريخ الناشر : {e.year_publication}</p>
                                </div>
                                <div className="col">
                                  <p> تأليف: {e.book_authors}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <p>{e.ISBN} : ISBN</p>
                                </div>
                                <div className="col">
                                  <p> الناشر : {e.publisher_name}</p>
                                </div>
                              </div>
                              <p> المواضيع الرئيسية : {e.book_Subjects}</p>

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
                                className="pt-3 pb-3"
                                src={e.book_cover}
                                alt="book_cover"
                                width={180}
                                height={200}
                              />
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                style={{ width: "180px" }}
                              >
                                أقر الوثيقة
                              </button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Container>
                  );
                })}
                <Typography
                  variant="body1"
                  sx={{ color: "blue", textAlign: "center" }}
                >
                  عرض المزيد
                </Typography>
              </div>
            </div>
            <FilterResults books={props.books} setBooks={props.setBooks} />
          </div>
        </Container>
      </div>
    </div>
  );
}