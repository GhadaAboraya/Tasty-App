import React, { useState } from 'react';
import {
     Nav, NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Styles/NavBarStyles/navbar.css';
  
const Navv =() => {
   return(
        <div className="navv">
            <Nav className="links">
                <NavItem className="list">
                    <Link to="/home">Home</Link>
                </NavItem>
                <NavItem className="list">
                    <Link to="/about">About</Link>
                </NavItem>
                <NavItem className="list">
                    <Link to="/recipes">Recipes</Link>
                </NavItem>
                <NavItem className="list">
                    <Link to="/blog">Blog</Link>
                </NavItem>
                <NavItem className="list">
                    <Link to="/pages">Pages</Link>
                </NavItem>
                <NavItem className="list">
                    <Link to="/contact">Contact</Link>
                </NavItem>
            </Nav>
        </div>
    )
}
export default Navv;




