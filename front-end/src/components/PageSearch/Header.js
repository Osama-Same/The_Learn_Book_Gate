import React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
export function Header() {
  return (
    <header className="header">
      <Container maxWidth="lg">
        <Typography variant="h5">
          نتائج البحث
          <span> | </span>
        </Typography>
      </Container>
    </header>
  );
}
