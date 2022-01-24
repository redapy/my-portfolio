import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;

export const Infos = styled.div`
    align-self: flex-start;
    width: 40%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;    

    h3 {
        font-size: 30px;
        font-weight: 500;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 8px;
        color: var(--navy)
    }

    p {
        font-size: 16px;
    }

`;

export const Info = styled(animated.div)`
    width: 100%;
`;

export const PicWrapper = styled(animated.div)`
    width: 500px;
    min-height: 500px;
    img {
        width: 100%;
        max-width: 100%;
        border: 10px solid var(--navy);
        border-radius: 5%;
        object-fit: contain;
    }
`;
