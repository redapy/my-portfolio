import styled from "styled-components";

export const Nav = styled.ul`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: end;
    align-items: center;
    position: sticky;
    top:0;
    z-index: 100;
    background: ${props => props.active ? 'var(--navy)' : 'var(--seaFoam)'};

    li {
        list-style: none;
        padding: 0 1.5rem;
        
        :last-child {
            margin-right: 4em;
        }
    }
    a {
        text-decoration: none;
        color: ${props => props.active ? 'var(--salamon)' : 'black'};
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 1rem;
    }
`;