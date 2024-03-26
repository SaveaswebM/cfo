import Link from "next/link"
import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
<>

  {/* Scroll-top-end*/}
  {/* header-area */}

<header className="transparent-header">
<div id="home" className="tg-header__top">
  <div className="container custom-container">
    <div className="row">
      <div className="col-lg-6">
        <ul className="tg-header__top-info left-side list-wrap">
          <li>
            <i className="flaticon-phone-call" />
            <a href="tel:992 061 9074">+91 992 061 9074</a>
          </li>
          <li>
            <i className="flaticon-pin" />
Powei , Mumbai City          </li>
        </ul>
      </div>
      <div className="col-lg-6">
        <ul className="tg-header__top-right list-wrap">
          <li>
            <i className="flaticon-envelope" />
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arun@cfosupport.in"  target="_blank">arun@cfosupport.in</a>
          </li>
         
        </ul>
      </div>
    </div>
  </div>
</div>
<Navbar expand="lg" id="sticky-header" className="bg-body-tertiary ">
      <Container className="justify-content-between" >
        <Navbar.Brand href="#"><img   width="125" height="90" src="assets/img/logo/logo.png"></img></Navbar.Brand>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav  tgmenu__main-menu ">
          <Nav className="me-auto navigation menu-item-has-children sub-menu">
            <Nav.Link className="custom-nav-link" href="#home" >HOME</Nav.Link>
            <Nav.Link className="custom-nav-link" href="#about">WHY VIRTUAL CFO</Nav.Link>
            <Nav.Link className="custom-nav-link" href="#what">WHAT WE DO</Nav.Link>

            <Nav.Link className="custom-nav-link" href="#services-offered">SERVICES OFFERED</Nav.Link>
            <Nav.Link className="custom-nav-link" href="#team">TEAM</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
</header>



  

  {/* main-area-end */}
  {/* footer-area */}

</>




  
  )
}
