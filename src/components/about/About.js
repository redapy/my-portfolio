import React, { useMemo } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

import { Info, Skills, SkillsList, Wrapper } from './About.styles';

const About = () => {

    const optionsMemo = useMemo(() => (
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        }
    ), [])

    const [isvisible, wrapperRef] = useOnScreen(optionsMemo)

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
                    <li>html</li>
                    <li>css</li>
                    <li>react</li>
                </SkillsList>
            </Skills>}
        </Wrapper>
     );
}
 
export default About;