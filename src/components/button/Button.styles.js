import styled from "styled-components";
import { animated } from "@react-spring/web";


export const Warrepr = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 720px){
        margin-top: 2rem;
    }
`;

export const Content = styled(animated.button)`
    min-width: 20%;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--salamon);
    background: inherit;
    text-decoration: none;
    padding: 1em 1em;
    cursor: pointer;

`;

export const Text = styled(animated.a)`
    font-size: clamp(0.8rem, 0.5vw + .5rem, 1rem);
    font-family: 'Source Code Pro', monospace;
    text-decoration:none;
    color: black;
`;

export const Arrow = styled(animated.span)`
    margin-left: 10px;
    font-size: 20px;
`;