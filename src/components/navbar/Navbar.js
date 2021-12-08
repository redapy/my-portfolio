import React, { useState } from 'react';
import Links from './Links';
import { Icon, Wrapper } from './Navbar.styles';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import AnimatedLinks from './AnimatedLinks';


const Navbarbar = () => {
    
    const [isOpened, setIsOpened] = useState(false)

    return ( 
        <>
        <Wrapper >
            <Links />
        </Wrapper>
        <Icon onClick={() => setIsOpened(isopened => !isopened)} isOpened={isOpened}>
            {!isOpened && <AiOutlineMenu />}
            {isOpened && <AiOutlineClose />}
        </Icon>
        {isOpened && <AnimatedLinks isOpened={isOpened}/>}
        </>
     );
}
 
export default Navbarbar;