import { useSpring, config, animated } from "react-spring";
import { Social } from "./Contacts.styles";

const Contact = ({link, text, icon}) => {
    const [{rotate}, api] = useSpring(() => ({
        rotate: '0deg',
        config: config.slow
    }));
    return ( 
        <Social 
        onMouseEnter={() => api.start({rotate: '360deg'})}
        onMouseLeave={() => api.start({rotate: '-360deg'})}
        href={link} 
        target="_blank" 
        rel="noreferrer">
        <animated.i style={{rotate}}>
          {icon}
        </animated.i>
        <span>{text}</span>
      </Social>
     );
}
 
export default Contact;