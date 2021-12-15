import React from "react"
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar} from 'react-bootstrap'
import CartWidget from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css"
import ListItems from "../ItemsListContainer/ItemListContainer";
import {Link} from "react-router-dom"

export default function NavBar () {
          return (
            <div className="App">
              <Navbar bg="dark" variant="dark"
                sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                  <h1>Monkey</h1>
                </Navbar.Brand>
                <Navbar.Toggle className="coloring" />
                  <Nav>
                    <Nav.Link to="/">Home</Nav.Link>
                    <Nav.Link to="/product">Products</Nav.Link>
                    <Nav.Link to="/aboutus">About Us</Nav.Link>
                    <Nav.Link to="/contact">Contact Us</Nav.Link>
                    <CartWidget/> 
                  </Nav>
              </Navbar>
              <ListItems/> 
            </div>
          );
}