import styled from "styled-components";
import { animated } from "@react-spring/web";

export const Wrapper = styled(animated.button)`
    width: 20%;
    margin: 0 auto;
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--salamon);
    background-color: inherit;
    text-decoration: none;
    font-size: 1rem;
    font-family: 'Source Code Pro', monospace;
    padding: 15px 10px;

`;

export const Arrow = styled(animated.span)`
    margin-left: 10px;

`;