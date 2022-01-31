import React, { useMemo } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import profile from "../../img/profile.jpg";
import { Content, Info, Infos, PicWrapper, Wrapper } from "./About.styles";
import Title from "../title/Title";
import SkillsList from "../skillsList/SkillsList";
import { useSpring, animated, config } from "react-spring";

const About = () => {
  // Set intersection observer for the wrapper
  const optionsMemo = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }),
    []
  );
  const [isvisible, wrapperRef] = useOnScreen(optionsMemo);

  // Animation
  const fadeInFromRight = useSpring({
    from: {
      opacity: 0,
      x:100,
    },
    to: {
      opacity: isvisible ? 1 : 0,
      x: isvisible ? 0 : 100,
    },
    config: config.slow,
  });

  const fadeInFromLeft = useSpring({
    from: {
      opacity: 0,
      x: -100,
    },
    to: {
      opacity: isvisible ? 1 : 0,
      x: isvisible ? 0 : -100,
    },
    config: config.slow,
  });

  return (
    <Wrapper ref={wrapperRef} id="about">
      <Title title="ABOUT ME" isvisible={isvisible} />
      <Content>
          <Infos style={fadeInFromLeft}>
            <Info >
              <animated.h3 >Who am I ?</animated.h3>
              <p>
                Hi, I'm a front-end developer based in Morocco, transitioning
                from a Marine Mechanic background (yes, I used to work on ships)
                into tech.
              </p>
              <p>I've been introduced to programming in one of my classes
                back in college. We've studied basic algorithms and
                data structures, and some C++. After graduation and during the
                pandemic, I've decided to self-teach dive into the programming world by
                taking a Python course, and man it's amazing !!</p>
              <p>
                Since then, I've been developing my skills in web development, and built
                amazing projects that I'm proud of. When I'm not coding, I do
                traveling, read manga, watch anime, or play video games.
              </p>
            </Info>
            <SkillsList isvisible={isvisible} />
          </Infos>
          <PicWrapper style={fadeInFromRight}>
            <img src={profile} alt="my-profile" />
          </PicWrapper>
      </Content>
    </Wrapper>
  );
};

export default About;
