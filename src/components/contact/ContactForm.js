import { useRef } from "react";
import { Form, Triangle, Wrapper } from "./ContactForm.styles";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const formRef = useRef();
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
    
    return ( 
        <Wrapper id='contact'>
            <Triangle>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                </svg>
            </Triangle>
            <h4><span>Get</span> in touch</h4>
            <Form ref={formRef} onSubmit={sendEmail}>
                <label>
                    <input 
                        type="text"
                        placeholder="your name..."
                        name="name"
                        required
                    />
                </label>
                <label>
                    <input 
                        type="email"
                        placeholder="your email..."
                        name="email"
                        required
                    />
                </label>
                <label >
                    <textarea 
                        name="message"
                        rows='10'
                        placeholder="Your message..."
                        required
                    />
                </label>
                <input type="submit" value='send'/>              
            </Form>
        </Wrapper>
     );
}
 
export default ContactForm;