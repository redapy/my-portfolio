import React from 'react';
import { Content, Waves, Wrapper } from './Welcome.styles';
import waves from '../../svg/wavesOpacity.svg'
import { motion } from 'framer-motion';

const Welcome = () => {
    const sentence = {
        visible : {
            opacity: 1,
            transition : {
                delay: 0.2,
                staggerChildren: 0.1,
            }
        },
        hidden: {
            opacity: 1
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

    const line1= 'Hi, My name is Reda';
    const line2 = "I'm a front-end web developer"

    return ( 
        <Wrapper>
            <Content>
                <motion.h1 variants={sentence} 
                            initial='hidden'
                            animate='visible'>
                    {line1.split('').map((letter, index) => (
                        <motion.span key={letter + '_' + index} variants={letters}>{letter}</motion.span>
                    ))}<br/>
                    {line2.split('').map((letter, index) => (
                        <motion.span key={letter + '_' + index} variants={letters}>{letter}</motion.span>
                    ))}
                </motion.h1>
            </Content>
            <Waves src={waves}/>
        </Wrapper>
     );
}
 
export default Welcome