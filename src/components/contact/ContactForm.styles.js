import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.section`
    position: relative;
    width: 100%;
    min-height: 90vh;
    background-color: var(--navy);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        margin: 90px auto;
        font-family: 'Nunito', sans-serif;
        font-size: 52px;
        font-weight: 900;
        color: var(--seaFoam);
        margin-bottom: 20px;
        span {
            background-image: linear-gradient(90deg, var(--seaFoam), var(--salamon));
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }
    }
`;

export const Triangle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 100px;
    }
    .shape-fill {
        fill: white;
    }
`;

export const Form = styled.form`
    width: 40%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    input, textarea {
        width: 100%;
        padding: 20px;
        margin-bottom: 12px;
        border: 2px solid var(--seaFoam);
        border-radius: 30px;
        outline: none;
        :focus {
            border: 2px solid var(--salamon)
        }
    }    
`;

export const Send = styled(animated.button)`
    width: 150px;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    font-size: 18px;
    font-family: 'Nunito', sans-serif;
    font-weight:600;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 30px;
    background: var(--seaFoam);
    color: var(--navy);
    cursor: pointer;
    span {
        margin-right: 6px;
    }
    i {
        font-size: 24px;
    }
`