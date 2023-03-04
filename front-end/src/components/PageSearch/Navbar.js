import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
export function Navbar() {
  return (
    <div className="navbar">
      <Container maxWidth="lg">
        <ul className="nav justify-content-end d-flex">
          <li className="nav-item">
            <Link className="nav-link text-primary" to={""}>
              نتائج البحث
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to={""}>
              / الرئيسية <HomeIcon />
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
