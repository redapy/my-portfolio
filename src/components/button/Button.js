import React from 'react';
//styles
import { Arrow, Text, Wrapper } from './Button.styles';
//Iconns
import {BsArrowRight} from 'react-icons/bs'
//animation
import {useSpring} from 'react-spring'

const Button = ({text, arrow, degre}) => {
    const [{background, color, rotate}, api] = useSpring(() => ({
        background: '#aed6dc',
        color: '#000000',
        rotate: '0deg'
    }))
    return ( 
        <Wrapper type='button'
            style={{background, color}}
            onMouseEnter={() => api.start({background: '#ff9a8d', color:'#4a536b', rotate:'90deg'})}
            onMouseLeave={() => api.start({background: '#aed6dc', color:'#000000', rotate:'0deg'})}
        >
            <Text style={{color}} href='#projects'>{text}</Text>
            {arrow && <Arrow style={{rotate}}
            ><BsArrowRight /></Arrow>}
        </Wrapper>
     );
}
 
export default Button;