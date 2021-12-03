import React from 'react';
import { Content, Waves, Wrapper, Title} from './Welcome.styles';
import waves from '../../svg/wavesOpacity.svg'
import {useSpring, animated, useTrail} from 'react-spring'
import Button from '../button/Button';


const Welcome = () => {

    const config = { mass: 5, tension: 3000, friction: 300 };
    const letters = ("I'm a front-end web developer, and my main focus is React ❤").split('');
    const fadeIn = useSpring({
        from: {
            opacity: 0,
            x: 50,
        },
        to: {
            opacity:1,
            x: 0,
            
        },
        config
    })

    const typeWritter = useTrail(letters.length, {
        from: {
            opacity: 0,
            y:50
        },
        to: {
            opacity: 1,
            y:0
        },
        config
    })

    return ( 
        <Wrapper>
            <Content>
                <animated.h1 style={fadeIn}>
                    Hi, My name is Reda
                </animated.h1>
                <p>
                {typeWritter.map(({y, ...props}, i) => (
                    <Title 
                        key={i}
                        style={{
                            ...props,
                            transform: y.to(y => `translate3d(0, ${y}, 0)`),
                        }}
                    >
                    {letters[i]}
                    </Title>
                ))}
                </p>
                <Button text='SEE MY WORK' arrow={true}/>
            </Content>
            <Waves src={waves}/>
        </Wrapper>
     );
}
 
export default Welcome