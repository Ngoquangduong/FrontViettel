import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./assets/CSS/Customheader.css"

function Header() {
  return (
   <div>
    
    <Navbar expand="lg" className="bg-nav">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/viettel-logo.png" height="60px" width="60px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className='nav-text-red text-custom-header'>Trang chủ</Link>
            <Link to="/Productlist" className='nav-text-red text-custom-header'>Sản phẩm</Link>
            <Link to="https://www.vietteltelecom.vn/sme" className='nav-text-red text-custom-header'>Dịch vụ doanh nghiệp</Link>
            <Link to="https://www.vietteltelecom.vn/ho-tro-khach-hang" className='nav-text-red text-custom-header'>Hỗ trợ</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
    
   </div>
  );
}

export default Header;