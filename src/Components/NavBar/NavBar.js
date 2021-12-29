import React from "react";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";
import {Link} from "react-router-dom";

export default function NavBar () {
          return (
            <div className="App">
              <Navbar bg="dark" variant="dark"
                sticky="top" collapseOnSelect expand="sm">
                <Container>
                  <Navbar.Brand href="/" id="logo">Monkey!</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <NavDropdown title="Products" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/buzos/">Buzos</NavDropdown.Item>
                      <NavDropdown.Item href="/remeras/">Remeras</NavDropdown.Item>
                      <NavDropdown.Item href="/aritos/">Aritos</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/">Ver todos los productos</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="/aboutus">About Us</Nav.Link>
                      <Nav.Link href="/contact">Contact Us</Nav.Link>
                      <CartWidget/> 
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          );
}