import styled from "styled-components";
import { animated } from "@react-spring/web";


export const Warrepr = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    font-size: 1rem;
    font-family: 'Source Code Pro', monospace;
    text-decoration:none;
    color: black;
`;

export const Arrow = styled(animated.span)`
    margin-left: 10px;
    font-size: 20px;
`;