import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--seaFoam);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    font-family: 'Source Code Pro', monospace;
`;

export const Content = styled(motion.div)`
    width: 50%;
    margin: 0 auto;
    text-align: center;
`;

export const Waves = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);    
`