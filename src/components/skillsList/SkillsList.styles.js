import styled from "styled-components";
export const Wrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
`;

export const List = styled.ul`
    display: flex;
    width: 100%;
    list-style: circle;
    li {
        margin:2px;
        font-size: 19px;
        font-family: 'Nunito', sans-serif;
        margin-left: 40px;
        :first-child {
            margin-left: 20px;
        }
    }
`