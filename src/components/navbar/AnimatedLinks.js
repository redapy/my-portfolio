import React from 'react';
import { useState } from 'react/cjs/react.development';
import {useTransition, animated, config} from 'react-spring'
import { List } from './Navbar.styles';


const AnimatedLinks = () => {

    const [links] = useState([{section: '#about', title: 'About', delay: 100}, {section: '#projects', title: 'Projects', delay: 150}, {section: '#contact', title: 'Contact', delay:200}])
    const listTransition = useTransition(links, {
        from: {opacity: 0, x: 40},
        enter: item => ({opacity: 1, x: 0, delay: item.delay}),
        config: config.slow
    })
    return ( 
        <List>
            {listTransition((style, item) => (
                <animated.li style={style}>
                    <a href={item.section}>{item.title}</a>
                </animated.li>
            ))}
        </List>
     );
}
 
export default AnimatedLinks;