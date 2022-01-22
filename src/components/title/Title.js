import { Border, Header, Wrapper } from "./Ttitle.styles";
import { config, useChain, useSpring, useSpringRef } from "react-spring";


const Title = ({title, isvisible}) => {
    const headerRef = useSpringRef()
    const borderRef = useSpringRef()
    const headerSpring = useSpring({
        from: {
            opacity: 0,
            x: -300
        },
        to: {
            opacity: isvisible ? 1 : 0,
            x: isvisible ? 0 : -300
        },
        config: config.slow,
        ref: headerRef
    });

    const borderSpring = useSpring({
        from: {
            opacity: 0,
            x: -300
        },
        to: {
            opacity: isvisible ? 1 : 0,
            x: isvisible ? 0 : -300
        },
        config: config.wobbly,
        ref: borderRef
    });

    useChain([headerRef, borderRef], [0, 0.4])    
    return ( 
        <Wrapper>
            <Header style={headerSpring}>{title}</Header>
            <Border style={borderSpring}/>
        </Wrapper>
     );
}
 
export default Title;