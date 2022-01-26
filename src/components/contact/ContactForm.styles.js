import styled from "styled-components";

export const Wrapper = styled.section`
    position: relative;
    width: 100%;
    min-height: 90vh;
    background-color: var(--navy);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
        margin: 0 auto;
        font-family: 'Nunito', sans-serif;
        font-size: 52px;
        font-weight: 900;
        color: var(--seaFoam);
        margin-bottom: 20px;
        span {
            color: var(--salamon);
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
        width: calc(162% + 1.3px);
        height: 80px;
    }
    .shape-fill {
        fill: white;
    }
`;

export const Form = styled.form`
    max-width: 60%;
    display: flex;
    flex-direction: column;
    input, textarea {
        width: 700px;
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