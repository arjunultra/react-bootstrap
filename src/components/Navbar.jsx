import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BrandNavbar() {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="bg-primary container-fluid">
        <Navbar.Brand href="#home">SUNCOAT PAINTS & EMULSIONS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-light' href="#home">Home</Nav.Link>
            <Nav.Link className='text-light' href="#link">Products</Nav.Link>
            <Nav.Link className='text-light' href="#link">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default BrandNavbar;