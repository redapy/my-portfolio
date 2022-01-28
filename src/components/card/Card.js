import { Hover, Project, ProjectImg, Wrapper, List, Title } from "./Card.styles";
import { useSpring, useTrail, config, animated, useSpringRef, useChain } from "react-spring";
import { useState } from "react";


const Card = ({title, link, stacks, image}) => {
    const [hovered, setHovered] = useState(false);
    const hoverRef = useSpringRef();
    const [{y}, api] = useSpring(() => ({ y: 100, ref: hoverRef }));
    const [skillsTrail, trailApi] = useTrail(stacks.length, () => ({
        x: 50,
        opacity: 0,
        config: config.stiff
    }));
    const buttonRef = useSpringRef();
    const buttonSpring = useSpring({
        from: {
            opacity: 0,
            y: -50,
        },
        to: {
            opacity: hovered ? 1 : 0,
            y: hovered ? 0 : -50,
        },
        ref:buttonRef
    });
    useChain([hoverRef, buttonRef], [0, 0.5])
    return ( 
        <Wrapper>
            <Project 
                onMouseEnter={() => {
                        api.start({y: 0})
                        trailApi.start({x: 0, opacity: 1})
                        setHovered(true)
                    }}
                onMouseLeave={() => {
                        api.start({y: 100})
                        trailApi.start({x: 50, opacity: 0})
                        setHovered(false)
                    }}
            >
                <ProjectImg>
                    <img src={image} alt="project" />
                </ProjectImg>
                <Hover style={{ transform: y.to(y => `translateY(${y}%`) }}>
                    <List>
                        {skillsTrail.map(({x, ...props}, i) => (
                            <animated.li 
                                key={stacks[i]}
                                style={{
                                    ...props,
                                    transform: x.to(x => `translate3d(${x}px, 0, 0)`)
                                }}
                            >{stacks[i]}</animated.li>
                        ))}
                    </List>
                    <Title style={{
                        ...buttonSpring,
                        transform: y.to(y => `translateY(${y}%`)                        
                        }}>
                    <button>
                        <a href={link} target='_blank' rel="noreferrer">Go live!</a>
                    </button>
                    <h4>{title.toUpperCase()}</h4>
                    </Title>

                </Hover>
            </Project>
        </Wrapper>
     );
}
 
export default Card;