import React from 'react';
import { Content, Waves, Wrapper, Title} from './Welcome.styles';
import waves from '../../svg/wavesOpacity.svg'
import { motion } from 'framer-motion';

const Welcome = () => {
    const sentence = {
        visible : {
            opacity: 1,
            transition : {
                duration: 1,
                staggerChildren: 0.07,
                when: 'beforeChildren'
            }
        },
        hidden: {
            opacity: 0
        }
    }

    const letters = {
        visible : {
            opacity: 1,
            y: 0
        },
        hidden: {
            opacity: 0,
            y:50
        }
    }

    const line1 = "I'm a front-end web developer,"
    const line2 = "and my main focus is React ❤"

    return ( 
        <Wrapper>
            <Content>
                <motion.h1 variants={sentence} 
                            initial='hidden'
                            animate='visible'>
                    Hi, My name is Reda
                    <br/>
                    {line1.split('').map((letter, index) => (
                        <Title key={letter + '_' + index} variants={letters}>{letter}</Title>
                    ))}<br/>
                    {line2.split('').map((letter, index) => (
                        <Title key={letter + '_' + index} variants={letters} subtitle>{letter}</Title>
                    ))}
                </motion.h1>
            </Content>
            <Waves src={waves}/>
        </Wrapper>
     );
}
 
export default Welcome