import React from "react";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import CartWidget from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

export default function NavBar () {
  const { category } = useParams()
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
                    <Link className="links" to="/"><Nav>Products</Nav></Link>
                    <Link className="links" to={`/${category}`}><Nav>Buzos</Nav></Link>
                    <Link className="links" to={`/${category}`}><Nav>Remeras</Nav></Link>
                    <Link className="links" to={`/${category}`}><Nav>Aritos</Nav></Link>
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