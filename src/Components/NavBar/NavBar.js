import React from "react";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import CartWidget from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";
import {Link} from "react-router-dom";

export default function NavBar () {
          return (
            <div className="App">
              <Navbar bg="dark" variant="dark"
                sticky="top" expand="sm" collapseOnSelect>
                <Link className="links" to="/">
                <Navbar.Brand>
                  <h1>Monkey</h1>
                </Navbar.Brand>
                </Link>
                <Navbar.Toggle className="coloring" />
                  <Nav>
                    <Link className="links" to="/"><Nav>Home</Nav></Link>
                    <NavDropdown title="Products" className="NavDropdown">
                      <Link className="links" to="/categoria">
                      <NavDropdown.Item>Remeras</NavDropdown.Item>
                      </Link>
                      <Link className="links" to="/categoria">
                      <NavDropdown.Item>Pantalones</NavDropdown.Item>
                      </Link>
                      <Link className="links" to="/categoria">
                      <NavDropdown.Item>Buzos</NavDropdown.Item>
                      </Link>
                      <Link className="links" to="/">
                      <NavDropdown.Divider />
                      <NavDropdown.Item>Ver todos los productos</NavDropdown.Item>
                      </Link>
                    </NavDropdown>
                    <Link className="links" to="/aboutus"><Nav>About Us</Nav></Link>
                    <Link className="links" to="/contact"><Nav>Contact Us</Nav></Link>
                    <Link className="links" to="/cart">
                    <CartWidget/> 
                    </Link>
                  </Nav>
              </Navbar>
            </div>
          );
}