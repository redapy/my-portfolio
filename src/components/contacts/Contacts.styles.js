import styled from 'styled-components'
import {animated} from 'react-spring'

export const Wrapper = styled(animated.div)`
    width: 25%;
    margin: 0 auto;
    margin-top: 20px; 
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const Social = styled(animated.a)`
    font-size: 32px;
    font-family: 'Nunito', sans-serif;
    color: var(--seaFoam);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    span {
        font-size: 18px;
        font-family: 'Nunito', sans-serif;
        background-image: linear-gradient(90deg, var(--seaFoam), var(--salamon));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        margin-left: 4px;
    }
`;