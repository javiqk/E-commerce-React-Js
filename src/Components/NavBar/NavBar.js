import React from "react"
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar} from 'react-bootstrap'
import CartWidget from "./CartWidget/CartWidget";
import "./CartWidget/CartWidget.css"
import ListItems from "./ItemsListContainer/ItemList";

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
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#blog">Products</Nav.Link>
                    <Nav.Link href="#about-us">About Us</Nav.Link>
                    <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                    <CartWidget/> 
                  </Nav>
              </Navbar>
              <ListItems/> 
            </div>
          );
}