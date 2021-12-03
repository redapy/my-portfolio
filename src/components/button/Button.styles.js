import styled from "styled-components";
import { animated } from "@react-spring/web";

export const Wrapper = styled(animated.button)`
    min-width: 20%;
    margin: 0 auto;
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--salamon);
    background: inherit;
    text-decoration: none;
    padding: 1em 1em;
    cursor: pointer;

`;

export const Text = styled(animated.span)`
    font-size: 1rem;
    font-family: 'Source Code Pro', monospace;
`;

export const Arrow = styled(animated.span)`
    margin-left: 10px;
    font-size: 20px;
`;