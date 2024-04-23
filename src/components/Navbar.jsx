import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

function BrandNavbar() {
  return (
    <Navbar data-bs-theme="light" expand="lg" className="bg-primary container-fluid">
      <Navbar.Brand href="#home">SUNCOAT PAINTS & EMULSIONS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className='nav-link text-light btn link-info' to="home" spy={true} smooth={true} duration={500}>Home</Link>
          <Link className='nav-link text-light btn link-info ' to="products" spy={true} smooth={true} duration={500}>Products</Link>
          <Link className='nav-link text-light btn link-info' to="aboutus" spy={true} smooth={true} duration={500}>About Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BrandNavbar;
