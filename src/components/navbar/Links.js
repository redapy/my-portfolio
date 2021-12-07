import React, {useState} from 'react';
//styles
import { List } from './Navbar.styles';
//animation
import {useTrail, animated} from 'react-spring'
import { Title } from '../welcome/Welcome.styles';

const Links = ({isOpened}) => {

    const [active, setActive ] = useState(false);
    const links = [
        {
            section: '#about',
            title: 'About'
        },
        {
            section: '#projects',
            title: 'Projects'
        },
        {
            section: '#contact',
            title: 'Contact'
        }
    ]

    const changeBackground = () => {
        window.scrollY > 80 ?  setActive(true) : setActive(false)
    }

    window.addEventListener('scroll', changeBackground)

    return (
    <List active={active}>
        <li><a href="#about">About me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </List> 
     );
}
 
export default Links;