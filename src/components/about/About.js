import React, { useMemo } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import profile from "../../img/profile.jpg";
import { Content, Info, Infos, PicWrapper, Wrapper } from "./About.styles";
import Title from "../title/Title";
import SkillsList from "../skillsList/SkillsList";
import { useSpring, animated } from "react-spring";

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
  const fadeIn = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: isvisible ? 1 : 0,
    },
    config: { duration: 1000 },
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
    config: { duration: 500 },
  });

  return (
    <Wrapper ref={wrapperRef} id="about">
      <Title title="ABOUT ME" isvisible={isvisible} />
      <Content>
        {isvisible && (
          <Infos>
            <Info style={fadeIn}>
              <animated.h3 style={fadeInFromLeft}>Who am I ?</animated.h3>
              <p>
                hi, I'm a self-taught developer based in Morocco, transitioning
                from a Marine mechanic background (yes, I used to work on ships)
                to tech.
              </p>
              <p>I've been introduced to coding in one of my classes
                back in college, in which we've studied basic algorithms and
                data structures and some c++. After graduation and during the
                pandemic, I've decided to dive into the programming world by
                taking a python course, and man it's amazing !!</p>
              <p>
                Since then, I've
                been developing my skills learning web development, and building
                amazing things that I'm proud of. When I'm not coding, I'm
                traveling, reading manga, watching anime, or playing video games.
              </p>
            </Info>
            <SkillsList isvisible={isvisible} />
          </Infos>
        )}
        {isvisible && (
          <PicWrapper style={fadeIn}>
            <img src={profile} alt="my-profile" />
          </PicWrapper>
        )}
      </Content>
    </Wrapper>
  );
};

export default About;
