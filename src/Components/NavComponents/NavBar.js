import React, { useState } from 'react';
import Logo from '../../Images/Logo.png';
import {
    Navbar, Container, NavbarToggler, Collapse, Nav, NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import '../Styles/NavBarStyles/navbar.css';
import Navv from './Navv';

  
const NavBar =() => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    

    window.addEventListener('scroll', function (e) {
        var MyNav = document.getElementById('MyNav');
        if (document.documentElement.scrollTop  > 200) {
            MyNav.classList.add('nav-colored');
            MyNav.classList.remove('nav-transparent');
            } else {
                MyNav.classList.add('nav-transparent');
                MyNav.classList.remove('nav-colored');
            }
    });
    
   return(
        <div className="nav">
            <Navbar light expand="md" fixed="top" id="MyNav">
                <Container>
                    <Link to="/">
                        <img src={Logo} className="logoimg"/>
                    </Link>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
                    <Collapse isOpen={!collapsed} navbar>
                    <Navv/>
                    </Collapse>
                    <Link href="#" className="icon"><FontAwesomeIcon icon={icons.faSearch} /></Link>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;