import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 720px) {
        width: 80%;
        margin: 0 auto;
        min-height: auto;
        padding-left: 10px;
        margin-top: 5px;
        justify-content: center;
    }

`

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 720px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Infos = styled(animated.div)`
    align-self: flex-start;
    width: 40%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;    
    margin-bottom: 20px;

    h3 {
        font-size: 30px;
        font-weight: 600;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 8px;
        color: var(--navy)
    }

    p {
        font-size: 19px;
        font-family: 'Nunito', sans-serif;
        padding: 6px 0;
        line-height: 1.5;
    }

    @media screen and (max-width: 720px) {
        width: 100%;
        align-self: center;
        h3 {
            font-size: 16px;
        }
        p {
            font-size: 14px;
        }
    }

`;

export const Info = styled(animated.div)`
    width: 100%;
    margin-bottom: 2rem;
`;

export const PicWrapper = styled(animated.div)`
    width: 500px;
    min-height: 500px;

    @media screen and (max-width: 720px) {
        display: none;
    }
    
    img {
        width: 100%;
        max-width: 100%;
        border: 4px solid var(--salamon);
        border-radius: 5%;
        border-top-color: var(--seaFoam);
        border-left-color: var(--seaFoam);
        object-fit: contain;
        box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
    }
`;
