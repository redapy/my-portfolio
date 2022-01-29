import { Content, Waves, Wrapper, Title} from './Welcome.styles';
import waves from '../../svg/wavesOpacity.svg'
import {useSpring, animated, useTrail, config} from 'react-spring'
import Button from '../button/Button';


const Welcome = () => {
    const myConfig = { mass: 2, tension: 3000, friction: 300 };
    const letters = ("I'm a front-end web developer, and my main focus is React ❤").split('');
    const fadeIn = useSpring({
        from: {
            opacity: 0,
            y: -100,
        },
        to: {
            opacity:1,
            y: 0,
            
        },
        config: config.molasses
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
        config: myConfig
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