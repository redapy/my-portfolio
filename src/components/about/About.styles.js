import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    min-height: 100vh;
`;

export const Info = styled.div`
    width: 40%;
`;

export const PicWrapper = styled.div`
    width: 400px;
    height: 400px;
    background: white;
    img {
        width: 100%;
        max-wdith: 100%;
        border: 10px solid var(--navy);
        border-radius: 5%;
        object-fit: contain;
    }
`;
