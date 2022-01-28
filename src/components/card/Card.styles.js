import { animated } from "react-spring";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 10PX
`;

export const Project = styled(animated.div)`
  position: relative;
  margin: 0 auto;
  width: 350px;
  height: 350px;
  overflow: hidden;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
`;

export const ProjectImg = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 40px;
  img {
    width: inherit;
    height: inherit;
    border-radius: 40px;
    object-fit: cover;
  }
`;

export const Hover = styled(animated.div)`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  width: inherit;
  height: inherit;
  border-radius: 40px;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1;
  transform: translateY(50%);
  cursor: default;
`;

export const List = styled.ul`
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    li {
        color: var(--seaFoam);
        border: 1px solid var(--seaFoam);
        padding: 6px;
        margin: 2px 4px;
    }
`

export const Title = styled(animated.div)`
  width: 90%;
  min-height: 30%;
  margin:0 auto;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
    color: var(--seaFoam);
  }

  button {
    width: 100px;
    margin: 0 auto;
    padding: 8px; 
    border: 2px solid var(--seaFoam);
    background: inherit;
    color: var(--seaFoam);
    cursor: pointer;
    transition: all ease-in 0.2s;
    :hover {
      transform: scale(1.2);
    }
  }
  h4 {
    color: var(--salamon);
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
  }
`;