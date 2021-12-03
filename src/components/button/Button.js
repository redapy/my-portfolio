import React from 'react';
import { Arrow, Wrapper } from './Button.styles';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Button = ({text, arrow}) => {
    return ( 
        <Wrapper type='button'>
            {text}
            {arrow && <Arrow><AiOutlineArrowRight /></Arrow>}
        </Wrapper>
     );
}
 
export default Button;