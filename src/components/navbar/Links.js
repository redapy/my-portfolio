import React, {useState} from 'react';
//styles
import { List } from './Navbar.styles';

const Links = () => {

    const [active, setActive ] = useState(false);

    const changeBackground = () => {
        window.scrollY > 80 ?  setActive(true) : setActive(false)
    };

    window.addEventListener('scroll', changeBackground);

    return (
    <List active={active}>
        <li><a href="#about">About me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </List> 
     );
}
 
export default Links;