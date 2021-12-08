import styled from "styled-components";


export const Wrapper = styled.nav`
    width: 100%;
    height: 80px;
    position: sticky;
    top:0;
    z-index: 10;
    @media screen and (max-width: 720px) {
        display: none;
    }
`;

export const Icon = styled.button`
    display: none;
    @media screen and (max-width: 720px) {
        display: block;
        position: absolute;
        right: 0;
        margin: 1rem;
        font-size: 2em;
        border: none;
        background-color: ${props => props.isOpened ? 'var(--navy)' : 'var(--seaFoam)'};
        color: ${props => props.isOpened ? 'var(--seaFoam)' : 'var(--navy)' };;
        cursor: pointer;
        
    }
`;

export const List = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    background: ${props => props.active ? 'var(--navy)' : 'var(--seaFoam)'};

    li {
        list-style: none;
        padding: 0 1.5rem;

    }
    a {
        text-decoration: none;
        color: ${props => props.active ? 'var(--salamon)' : 'black'};
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        font-size: 1rem;
        :hover {
            opacity: 0.7;
        }
    }

    @media screen and (max-width: 720px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        

        li {
            padding-bottom: 1.5rem;
            width: 100%;
            background-color: var(--navy);
            :first-child {
                padding-top: 1.5rem;
            }
        }
        a {
            color: var(--salamon);
        }
    }
`;