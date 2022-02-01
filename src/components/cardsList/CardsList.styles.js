import styled from "styled-components";


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  width:80%;
  grid-gap:6rem ;
  margin: 0 auto;
  padding-bottom: 2rem;
  @media screen and (max-width: 720px) {
    grid-gap: 2rem;
    margin-top: 6px;
  }
`