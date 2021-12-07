import React, { useState } from 'react';
import Links from './Links';
import { Icon, Wrapper } from './Navbar.styles';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbarbar = () => {
    
    const [isOpened, setIsOpened] = useState(false)

    return ( 
        <>
        <Wrapper >
            <Links />
        </Wrapper>
        <Icon onClick={() => setIsOpened(!isOpened)} isOpened={isOpened}>
            {!isOpened && <AiOutlineMenu />}
            {isOpened && <AiOutlineClose />}
        </Icon>
        {isOpened && <Links isOpened={isOpened}/>}
        </>
     );
}
 
export default Navbarbar;