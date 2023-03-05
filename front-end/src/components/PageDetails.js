import React, { useState, useEffect } from "react";
import { _detailsBook } from "../service/book";
import { useParams } from "react-router-dom";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
export function PageDetails() {
  let { _id } = useParams();
  const [bookDetails, setIdBookDetails] = useState("");

  useEffect(() => {
    getBookId(_id);
  });

  const getBookId = async (_id) => {
    const _bookDetails = await _detailsBook(_id);
    setIdBookDetails(_bookDetails);
    console.log(bookDetails);
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ mt: 10, mb: 5 }}>
      {bookDetails && bookDetails && (
        <div className="row">
          <div className="col-md-5 pt-3 pb-3">
            <img
              className=" pt-3 pb-3"
              src={bookDetails.book_cover}
              width="304"
              alt={bookDetails.book_cover}
            />
          </div>
          <div className="col pt-3 pb-3">
            <Typography variant="h6" marginBottom="4%">
              Information
            </Typography>
            <div className="row mt-2">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>book Title : </ListItemIcon>
                    <ListItemText primary={bookDetails.book_title} />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
            <div className="row mt-2">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>book Authors : </ListItemIcon>
                    <ListItemText primary={bookDetails.book_authors} />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
            <div className="row mt-2">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>book Subjects : </ListItemIcon>
                    <ListItemText primary={bookDetails.book_Subjects} />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
            <div className="row mt-2">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>book Year : </ListItemIcon>
                    <ListItemText primary={bookDetails.year_publication} />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
            <div className="row mt-2">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>Publisher Name : </ListItemIcon>
                    <ListItemText primary={bookDetails.publisher_name} />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
            <div className="row mt-2">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>ISBN : </ListItemIcon>
                    <ListItemText primary={bookDetails.ISBN} />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
