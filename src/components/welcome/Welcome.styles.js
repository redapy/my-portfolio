import styled from "styled-components";
import { animated } from "@react-spring/web";


export const Wrapper = styled.section`
    width: 100%;
    position: relative;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--seaFoam);
    font-family: 'Source Code Pro', monospace;

    @media screen and (max-width: 720px) {
        min-height: 100vh;
    }
`;

export const Content = styled.div`
    width: 50%;
    display:flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    line-height: 1;
    h1 {
        font-weight: 600;
        font-size: 3rem
    }
    p {
        margin-top: 1rem;
    }
`;

export const Title = styled(animated.span)`
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.3;
        font-style: italic;
        color: var(--navy);
`;

export const Waves = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);    
`;