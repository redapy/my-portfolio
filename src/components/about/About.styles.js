import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
    min-height: 100vh;
`;

export const Info = styled.div`
    width: 40%;
    margin-top: 100px;
`;

export const Skills = styled.div`
    width: 40%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
`;

export const SkillsList = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
    list-style: none;
    justify-content: center;
    align-items: left;
`