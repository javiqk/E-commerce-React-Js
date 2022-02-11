import React from "react";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";

export default function NavBar () {
          return (
            <div className="App">
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to='/' className="Link">
                <a class="logo">Monkey</a>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                    <Link to='/' className="Link">
                      <a class="nav-link">Home</a>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link to ='/contact' className="Link">
                      <a class="nav-link">Contact</a>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/aboutus' className="Link">
                      <a class="nav-link">About Us</a>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/remeras' className="Link">
                      <a class="nav-link">Remeras</a>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/buzos' className="Link">
                      <a class="nav-link">Buzos</a>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/aritos' className="Link">
                      <a class="nav-link">Aritos</a>
                    </Link>
                    </li>
                  </ul>
                  <CartWidget/> 
                </div>
                
              </nav>
              </div>       
                  

            
          );
}