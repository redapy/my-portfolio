import React, { useState } from 'react';
import { Nav } from './Navbar.styles';

const Navbar = () => {
    
    const [active, setActive ] = useState(false);

    const changeBackground = () => {
        window.scrollY > 80 ?  setActive(true) : setActive(false)
    }

    window.addEventListener('scroll', changeBackground)
    
    return ( 
        <Nav active={active}>
            <li><a href="#about">About me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </Nav>
     );
}
 
export default Navbar;