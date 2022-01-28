import { Social, Wrapper } from "./Contacts.styles";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const Contacts = () => {
  return (
    <Wrapper>
      <Social href="https://github.com/redapy" target="_blank" rel="noreferrer">
        <i>
          <BsGithub />
        </i>
        <span>GitHub</span>
      </Social>
      <Social
        href="https://twitter.com/redabaha12"
        target="_blank"
        rel="noreferrer"
      >
        <i>
          <BsTwitter />
        </i>
        <span>Twitter</span>
      </Social>
      <Social
        href="https://www.linkedin.com/in/reda-baha-5188b9194/"
        target="_blank"
        rel="noreferrer"
      >
        <i>
          <BsLinkedin />
        </i>
        <span>LinkedIn</span>
      </Social>
    </Wrapper>
  );
};

export default Contacts;
