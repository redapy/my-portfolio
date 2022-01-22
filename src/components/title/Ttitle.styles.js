import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.div`
  width: 40%;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Header = styled(animated.h2)`
    font-size: 40px;
    margin-bottom: 6px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    color: var(--navy);
`;

export const Border = styled(animated.div)`
   width: 20%;
   height: 5px;
   background-color: var(--navy);
`;