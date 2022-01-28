import styled from 'styled-components'
import {animated} from 'react-spring'

export const Wrapper = styled(animated.div)`
    width: 25%;
    margin: 0 auto;
    margin-top: 20px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Social = styled(animated.a)`
    font-size: 32px;
    color: var(--seaFoam);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    span {
        font-size: 18px;
        background-image: linear-gradient(90deg, var(--seaFoam), var(--salamon));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        margin-left: 4px;
    }
`;