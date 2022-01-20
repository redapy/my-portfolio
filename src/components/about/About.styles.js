import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    min-height: 100vh;
`;

export const Info = styled(animated.div)`
    width: 40%;
    h2 {
        margin-bottom: 4px;
        color: var(--navy)
    }
`;

export const PicWrapper = styled(animated.div)`
    width: 500px;
    min-height: 500px;
    img {
        width: 100%;
        max-wdith: 100%;
        border: 10px solid var(--navy);
        border-radius: 5%;
        object-fit: contain;
    }
`;
