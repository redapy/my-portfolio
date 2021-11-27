import styled from "styled-components";

export const Nav = styled.ul`
    width: 100%;
    min-height: 20%;
    display: flex;
    justify-content: end;
    align-items: center;    
    li {
        list-style: none;
        padding: 1rem 2rem;
        :last-child {
            margin-right: 2rem;
        }
    }
    a {
        text-decoration: none;
        color: black;
    }
`;