import { useState } from "react";
import {
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
export function FormSearch(props) {
  const [search, setSearch] = useState("");

  return (
    <div className="FormSearch">
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
          spacing={5}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ width: 100 }}
            onClick={async (e) => {
              if (search === "") {
                return props.update();
              }
              let a = props.books.filter((e) => {
                return (
                  e.book_title.includes(search) || e.book_type.includes(search)
                );
              });
              props.setBooks(a);
            }}
          >
            بحث المتقدم
          </Button>
          <div className="input-group ">
            <TextField
              fullWidth
              size="small"
              placeholder="search book Title or book Type"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle btn-md"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      تصفح المكتبة الرقمية
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <Link className="dropdown-item">1</Link>
                        <Link className="dropdown-item">2</Link>
                        <Link className="dropdown-item">3</Link>
                      </li>
                    </ul>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </Stack>
      </Container>
    </div>
  );
}
