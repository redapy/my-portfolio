import React, { useMemo } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

import { Info, Wrapper } from './About.styles';

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


    return ( 
        <Wrapper ref={wrapperRef} id='about'>
            {isvisible && 
            <Info >
                <h2>Who am I ?</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque perferendis eveniet, sapiente repudiandae, architecto delectus molestias neque distinctio, veniam qui dolor est ipsam excepturi reiciendis repellat eos quos nesciunt?
                </p>
            </Info>}
        </Wrapper>
     );
}
 
export default About;