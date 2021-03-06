import styled from "styled-components";
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
`;

export const List = styled.ul`
    display: flex;
    justify-content: left;
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
    @media screen and (max-width: 720px) {
        flex-direction: column;
        list-style: none;
        li {
            padding: 2px;
            margin-left: 0px;
            font-size: 14px;
            :first-child {
                margin-left: 0;
            }
        }
    }
`