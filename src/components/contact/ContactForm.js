import { useMemo, useRef } from "react";
import { Form, Send, Triangle, Wrapper } from "./ContactForm.styles";
import emailjs from "@emailjs/browser";
import useOnScreen from "../../hooks/useOnScreen";
import { config, useTrail, animated, useSpring } from "react-spring";
import { IoIosSend } from "react-icons/io";
import Contacts from "../contacts/Contacts";

const ContactForm = () => {
  const formRef = useRef();
  const optionsMemo = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }),
    []
  );
  const [isvisible, wrapperRef] = useOnScreen(optionsMemo);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4wri1cv",
        "template_jgqhmrv",
        formRef.current,
        "user_6hZifYPTTlAtXdKICo0Nz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
  };
  //animation
  const inputs = [
    { type: "text", placeholder: "Your name...", name: "name" },
    { type: "email", placeholder: "Your email...", name: "email" },
    { rows: "7", placeholder: "Your message...", name: "message" },
  ];
  const inputsTrail = useTrail(inputs.length, {
    from: {
      opacity: 0,
      x: -150,
    },
    to: {
      opacity: isvisible ? 1 : 0,
      x: isvisible ? 0 : -150,
    },
    config: config.slow,
  });
  const fadeInFromLeft = useSpring({
    from: {
      opacity: 0,
      x: -300,
    },
    to: {
      opacity: isvisible ? 1 : 0,
      x: isvisible ? 0 : -300,
    },
    config: config.wobbly,
  });
  const { y, ...buttonSpring } = useSpring({
    from: {
      opacity: 0,
      y: 100,
    },
    to: {
      opacity: isvisible ? 1 : 0,
      y: isvisible ? 0 : 100,
    },
  });

  return (
    <Wrapper ref={wrapperRef} id="contact">
      <Triangle>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </Triangle>
      <animated.h2 style={fadeInFromLeft}>
        <span>Get </span>
        in touch
      </animated.h2>
      <Form ref={formRef} onSubmit={sendEmail}>
        {inputsTrail.map(({ x, ...props }, i) => (
          <animated.label
            key={inputs[i].name}
            style={{
              ...props,
              transform: x.to((x) => `translate3d(${x}px, 0, 0)`),
            }}
          >
            {!inputs[i].rows && (
              <input
                type={inputs[i].type}
                placeholder={inputs[i].placeholder}
                name={inputs[i].name}
                required
              />
            )}
            {inputs[i].rows && (
              <textarea
                rows={inputs[i].rows}
                placeholder={inputs[i].placeholder}
                name={inputs[i].name}
                required
              />
            )}
          </animated.label>
        ))}
        <Send
          style={{
            ...buttonSpring,
            transform: y.to((y) => `translateY(${y}%`),
          }}
        >
          <span>SEND</span>
          <i><IoIosSend /></i>
        </Send>
      </Form>
      <Contacts style={{
            ...buttonSpring,
            transform: y.to((y) => `translateY(${y}%`),
          }}/>
    </Wrapper>
  );
};

export default ContactForm;
