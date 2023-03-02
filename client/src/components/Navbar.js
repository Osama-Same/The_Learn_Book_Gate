import HomeIcon from "@mui/icons-material/Home";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <div style={{ background: "silver" }}>
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
  );
}
