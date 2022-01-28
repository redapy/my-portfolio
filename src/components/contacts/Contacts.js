import { Wrapper } from "./Contacts.styles";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { useSpring } from "react-spring";
import Contact from "./Contact";

const Contacts = ({ isvisible }) => {
  const { y, ...contactSpring } = useSpring({
    from: {
      opacity: 0,
      y: 100,
    },
    to: {
      opacity: isvisible ? 1 : 0,
      y: isvisible ? 0 : 100,
    },
  });

  const socials = [{link: "https://github.com/redapy", text: 'GitHub', icon: <BsGithub />}, {link: "https://twitter.com/redabaha12", text: 'Twitter', icon: <BsTwitter/>}, {link: "https://www.linkedin.com/in/reda-baha-5188b9194/", text: 'LinkedIn', icon: <BsLinkedin/>}]

  return (
    <Wrapper
      style={{
        ...contactSpring,
        transform: y.to((y) => `translateY(${y}%`),
      }}
    >
    {socials.map((contact) => (
        <Contact 
            key={contact.link}
            link={contact.link}
            text={contact.text}
            icon={contact.icon}
        />
    ))}

    </Wrapper>
  );
};

export default Contacts;
