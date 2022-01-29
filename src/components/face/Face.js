import { Wrapper } from "./Face.styles";
import { animated, useSpring } from "react-spring";


const eyeColours = ["#664300", "#DE2A42"];

const Face = ({index, interpolators}) => {

  const animationProps = useSpring({
    from: { x: 0 },
    to: {
      x: 1,
      eyeColour: eyeColours[index] 
    },
    config: {
      clamp: true
    },
    reset: true
  });

  return (
    <Wrapper>
      <svg
        width="240"
        height="240"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="18" fill="#FFCD4C" />
        <animated.path
          d={animationProps.x.to(interpolators.rightEye)}
          fill={animationProps.eyeColour}
        />
        <animated.path
          d={animationProps.x.to(interpolators.leftEye)}
          fill={animationProps.eyeColour}
        />
        <animated.path
          d={animationProps.x.to(interpolators.mouth)}
          fill="#664300"
        />
      </svg>
    </Wrapper>
  )
} 


export default Face
