import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/CSS/Customheader.css";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-nav">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/newlogomain.png" height="80px" width="180px" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="nav-text-red text-custom-header">
                Trang chủ
              </Link>
              <Link
                to="/Productlist"
                className="nav-text-red text-custom-header"
              >
                Sản phẩm
              </Link>
              <Link to="/Posts" className="nav-text-red text-custom-header">
                Tin tức
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
