import React from 'react';
import { Nav } from './Navbar.styles';

const Navbar = () => {
    return ( 
        <Nav>
            <li><a href="#about">About me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </Nav>
     );
}
 
export default Navbar;