import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
export function Header() {
  return (
    <div>
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
            pt={20}
            pr={3}
            pb={5}
          >
            نتائج البحث
            <span style={{ color: "blue", fontSize: "30px" }}> | </span>
          </Typography>
        </Container>
      </header>
    </div>
  );
}
