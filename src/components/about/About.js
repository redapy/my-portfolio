import React, { useMemo } from 'react';
import { animated, config, useTrail} from 'react-spring';
import useOnScreen from '../../hooks/useOnScreen';

import { Info, Skills, SkillsList, Wrapper } from './About.styles';

const About = () => {
    // Set intersection observer for the wrapper
    const optionsMemo = useMemo(() => (
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        }
    ), []);
    const [isvisible, wrapperRef] = useOnScreen(optionsMemo);
    // Animating the skills list
    const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'git', 'GitHub'];
    const skillsTrail = useTrail(skills.length, {
        from: {
            opacity:0,
            x: 20,
        },
         to: {
             opacity: isvisible ? 1 : 0,
             x: isvisible ? 0 : 70
         },
         config: config.slow
    })

    return ( 
        <Wrapper ref={wrapperRef} id='about'>
            {isvisible && 
            <Info >
                <h2>Who am I ?</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque perferendis eveniet, sapiente repudiandae, architecto delectus molestias neque distinctio, veniam qui dolor est ipsam excepturi reiciendis repellat eos quos nesciunt?
                </p>
            </Info>}
            {isvisible && 
            <Skills>
                <h2>Technical Skills</h2>
                <SkillsList>
                    {skillsTrail.map(({x, ...props}, i) => (
                        <animated.li 
                            key={skills[i]}
                            style={{
                                ...props,
                                transform: x.to(x => `translate3d(${x}px, 0, 0)`)
                            }}
                        >{skills[i]}</animated.li>
                    ))}
                </SkillsList>
            </Skills>}
        </Wrapper>
     );
}
 
export default About;