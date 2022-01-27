import { useMemo, useRef} from "react";
import { Form, Triangle, Wrapper } from "./ContactForm.styles";
import emailjs from '@emailjs/browser';
import useOnScreen from "../../hooks/useOnScreen";
import { config, useTrail, animated, useSpring } from "react-spring";

const ContactForm = () => {
    const formRef = useRef();
    const optionsMemo = useMemo(() => (
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }
    ), []);
    const [isvisible, wrapperRef] = useOnScreen(optionsMemo);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4wri1cv', 'template_jgqhmrv', formRef.current, 'user_6hZifYPTTlAtXdKICo0Nz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

         e.currentTarget.reset();
      };
      //animation
    const inputs = [{type: "text", placeholder:"Your name...", name:"name"}, {type: "email", placeholder:"Your email...", name:"email"}, {rows:'7', placeholder:"Your message...", name:"message"}]
    const inputsTrail = useTrail(inputs.length, {
        from: {
            opacity:0,
            x: -150,
                },
        to: {
            opacity: isvisible ? 1 : 0,
            x: isvisible ? 0 : -150
        },
        config: config.slow
            });
    const fadeInFromLeft = useSpring({
        from: {
            opacity: 0,
            x: -300
        },
        to: {
            opacity: isvisible ? 1 : 0,
            x: isvisible ? 0 : -300
        },
        config: config.wobbly
    });

    const fadeInFromRight = useSpring({
        from: {
            opacity: 0,
            x: 300
        },
        to: {
            opacity: isvisible ? 1 : 0,
            x: isvisible ? 0 : 300
        },
        config: config.wobbly
    });
    

      
    
    return ( 
        <Wrapper ref={wrapperRef} id='contact'>
            <Triangle>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                </svg>
            </Triangle>
            <animated.h2 style={fadeInFromLeft}>
                <span>Get </span>
                 in touch
            </animated.h2>
            <Form ref={formRef} onSubmit={sendEmail}>
                {inputsTrail.map(({x, ...props}, i) => (
                    <animated.label
                        key={inputs[i].name}
                        style={{
                        ...props,
                        transform: x.to(x => `translate3d(${x}px, 0, 0)`)
                        }}
                    >
                        {!inputs[i].rows && <input 
                            type={inputs[i].type}
                            placeholder={inputs[i].placeholder}
                            name={inputs[i].name}
                            required
                        />}
                        {inputs[i].rows && <textarea 
                            rows={inputs[i].rows}
                            placeholder={inputs[i].placeholder}
                            name={inputs[i].name}
                            required
                        />}
                    </animated.label>
                ))}
                <input type="submit" value='send'/>              
            </Form>
        </Wrapper>
     );
}
 
export default ContactForm;