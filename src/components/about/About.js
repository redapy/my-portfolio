import React, { useMemo } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import profile from '../../img/profile.jpg'
import { Content, Info, Infos, PicWrapper, Wrapper } from './About.styles';
import Title from '../title/Title'
import SkillsList from '../skillsList/SkillsList'
import {useSpring, animated} from 'react-spring'


const About = () => {
    // Set intersection observer for the wrapper
    const optionsMemo = useMemo(() => (
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }
    ), []);
    const [isvisible, wrapperRef] = useOnScreen(optionsMemo);

    // Animation
    const fadeIn = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: isvisible ? 1 : 0
        },
        config: {duration: 1000}
    })

    const fadeInFromLeft = useSpring({
        from: {
            opacity: 0,
            x: -100
        },
        to: {
            opacity: isvisible ? 1 : 0,
            x: isvisible ? 0 : -100
        },
        config: {duration: 500}
    })
    

    return ( 
        <Wrapper ref={wrapperRef} id='about'>
        <Title title='ABOUT ME' isvisible={isvisible}/>
        <Content> 
            {isvisible && 
            <Infos>
                <Info  style={fadeIn}>
                    <animated.h3 style={ fadeInFromLeft }>Who am I ?</animated.h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque perferendis eveniet, sapiente repudiandae, architecto delectus molestias neque distinctio, veniam qui dolor est ipsam excepturi reiciendis repellat eos quos nesciunt?
                    </p>
                </Info>
                <SkillsList isvisible={isvisible} />
            </Infos>
            }
            {isvisible &&
                <PicWrapper style={fadeIn}>
                    <img src={profile} alt="my-profile" />
                </PicWrapper>
            }
        </Content>
        </Wrapper>
     );
}
 
export default About;